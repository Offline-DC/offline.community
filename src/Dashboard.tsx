import * as React from "react";
import "./Dashboard.css";

// Types for resources
type Sim = {
	sim_number: string;
	sim_status?: string | null;
	added_on?: string | null;
	updated_on?: string | null;
	[k: string]: any;
};

type Phone = {
	imei: string;
	sim_number?: string | null;
	location?: string | null;
	phone_status?: string | null;
	added_on?: string | null;
	updated_on?: string | null;
	[k: string]: any;
};

type PhoneLine = {
	phone_number: string;
	line_status?: string | null;
	owner_type?: string | null;
	contract_id?: string | null;
	current_owner?: string | null;
	sim_number?: string | null;
	activated_on?: string | null;
	changed_owner_on?: string | null;
	[k: string]: any;
};

function formatMySQLDatetime(input?: string | null): string {
	if (!input) return "";
	let cleaned = input.trim().replace(/T/, " ").replace(/\..+$/, "").replace(/([+-]\d{2}:?\d{2}|Z)$/, "").trim();
	const m = cleaned.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/);
	if (!m) return input;
	const [, y, mo, d, hh, mm, ss] = m;
	const utcMillis = Date.UTC(Number(y), Number(mo) - 1, Number(d), Number(hh), Number(mm), Number(ss || "0"));
	const utcDate = new Date(utcMillis);
	const datePart = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", month: "long", day: "numeric", year: "numeric" }).format(utcDate);
	const timePart = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: true }).format(utcDate);
	return `${datePart} at ${timePart}`;
}

// Simple Toast system
type Toast = { id: string; message: string; type?: "success" | "error" };
function useToasts() {
	const [toasts, setToasts] = React.useState<Toast[]>([]);
	function push(message: string, type: Toast["type"] = "success") {
		const id = String(Date.now()) + Math.random().toString(16).slice(2);
		setToasts((s) => [...s, { id, message, type }]);
		setTimeout(() => {
			setToasts((s) => s.filter((t) => t.id !== id));
		}, 5000);
	}
	return { toasts, push };
}

function Toasts({ toasts }: { toasts: Toast[] }) {
	return (
		<div className="dashboard toast-container">
			{toasts.map((t) => (
				<div key={t.id} className={`toast ${t.type === "error" ? "toast-error" : "toast-success"}`}>
					{t.message}
				</div>
			))}
		</div>
	);
}

// Lightweight Modal
function Modal({ open, title, children, onClose }: { open: boolean; title?: string; children?: React.ReactNode; onClose: () => void }) {
	if (!open) return null;
	return (
		<div className="dashboard modal-backdrop" onClick={onClose}>
			<div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
				{title && <h3 className="modal-title">{title}</h3>}
				{children}
			</div>
		</div>
	);
}

export default function Dashboard(): React.ReactElement {
	const MASTER_PASSWORD = import.meta.env.VITE_MASTER_PASSWORD ?? "";
	const [authorized, setAuthorized] = React.useState<boolean>(false);
	const [passwordAttempt, setPasswordAttempt] = React.useState("");
	const [authError, setAuthError] = React.useState<string | null>(null);

	React.useEffect(() => {
		if (!MASTER_PASSWORD) {
			setAuthorized(true);
			return;
		}
		try {
			const saved = sessionStorage.getItem("dashboard_auth_v1");
			if (saved === "1") setAuthorized(true);
		} catch (e) {}
	}, []);
	function handleAuthSubmit(e?: React.FormEvent) {
		if (e) e.preventDefault();
		setAuthError(null);
		if (passwordAttempt === MASTER_PASSWORD) {
			try {
				sessionStorage.setItem("dashboard_auth_v1", "1");
			} catch (err) {}
			setAuthorized(true);
		} else {
			setAuthError("Incorrect password");
		}
	}

	// toasts
	const { toasts, push } = useToasts();

	// UI state: active section
	const [section, setSection] = React.useState<"sims" | "phones" | "lines">("sims");

	// sims state
	const [sims, setSims] = React.useState<Sim[]>([]);
	const [simsLoading, setSimsLoading] = React.useState(false);

	// phones state
	const [phones, setPhones] = React.useState<Phone[]>([]);
	const [phonesLoading, setPhonesLoading] = React.useState(false);

	// phone lines state
	const [lines, setLines] = React.useState<PhoneLine[]>([]);
	const [linesLoading, setLinesLoading] = React.useState(false);

	// modal state
	const [modalOpen, setModalOpen] = React.useState(false);
	const [modalMode, setModalMode] = React.useState<"create" | "edit">("create");
	const [modalResource, setModalResource] = React.useState<"sims" | "phones" | "lines">("sims");
	const [formState, setFormState] = React.useState<any>({});

	// helper: API base (adjust if your API is mounted elsewhere)
	// Use Vite env `VITE_API_BASE` if provided, otherwise default to localhost base.
	// Normalize to include protocol if missing.
	let API_BASE = import.meta.env.VITE_API_BASE ?? "127.0.0.1:80/api/v1";
	if (!/^https?:\/\//i.test(API_BASE)) {
	    API_BASE = `http://${API_BASE}`;
	}

	// Fetch lists
	async function fetchSims() {
		setSimsLoading(true);
		try {
			const url = `${API_BASE}/sims`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			setSims(data || []);
		} catch (err: any) {
			push(`Failed to load sims: ${err?.message ?? err}`, "error");
		} finally {
			setSimsLoading(false);
		}
	}

	async function fetchPhones() {
		setPhonesLoading(true);
		try {
			const url = `${API_BASE}/phones`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			setPhones(data || []);
		} catch (err: any) {
			push(`Failed to load phones: ${err?.message ?? err}`, "error");
		} finally {
			setPhonesLoading(false);
		}
	}

	async function fetchLines() {
		setLinesLoading(true);
		try {
			const url = `${API_BASE}/phonelines`;
			const res = await fetch(url);
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();
			setLines(data || []);
		} catch (err: any) {
			push(`Failed to load phone lines: ${err?.message ?? err}`, "error");
			console.error("fetchLines error", err);
		} finally {
			setLinesLoading(false);
		}
	}

	React.useEffect(() => {
		fetchSims();
		fetchPhones();
		fetchLines();
	}, []);

	// CRUD helpers (generic patterns)
	async function createResource(resource: string, body: any) {
		const res = await fetch(`${API_BASE}/${resource}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return res.json();
	}

	async function updateResource(resource: string, id: string, body: any) {
		const res = await fetch(`${API_BASE}/${resource}/${encodeURIComponent(id)}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return res.json();
	}

	async function deleteResource(resource: string, id: string) {
		const res = await fetch(`${API_BASE}/${resource}/${encodeURIComponent(id)}`, { method: "DELETE" });
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		return true;
	}

	// UI handlers
	function openCreate(resource: "sims" | "phones" | "lines") {
		setModalMode("create");
		setModalResource(resource);
		setFormState({});
		setModalOpen(true);
	}

	function openEdit(resource: "sims" | "phones" | "lines", item: any) {
		setModalMode("edit");
		setModalResource(resource);
		setFormState(item ?? {});
		setModalOpen(true);
	}

	async function handleModalSave(e?: React.FormEvent) {
		if (e) e.preventDefault();
		try {
			if (modalMode === "create") {
				if (modalResource === "sims") {
					await createResource("sims", formState);
					push("Sim created");
					fetchSims();
				} else if (modalResource === "phones") {
					await createResource("phones", formState);
					push("Phone created");
					fetchPhones();
				} else {
					await createResource("phonelines", formState);
					push("Phone line created");
					fetchLines();
				}
			} else {
				if (modalResource === "sims") {
					await updateResource("sims", formState.sim_number, formState);
					push("Sim updated");
					fetchSims();
				} else if (modalResource === "phones") {
					await updateResource("phones", formState.imei, formState);
					push("Phone updated");
					fetchPhones();
				} else {
					await updateResource("phonelines", formState.phone_number, formState);
					push("Phone line updated");
					fetchLines();
				}
			}
			setModalOpen(false);
		} catch (err: any) {
			push(`Error: ${err?.message ?? err}`, "error");
		}
	}

	async function handleDelete(resource: "sims" | "phones" | "lines", id: string) {
		if (!confirm("Delete this item?")) return;
		try {
			if (resource === "sims") {
				await deleteResource("sims", id);
				push("Sim deleted");
				fetchSims();
			} else if (resource === "phones") {
				await deleteResource("phones", id);
				push("Phone deleted");
				fetchPhones();
			} else {
				await deleteResource("phonelines", id);
				push("Phone line deleted");
				fetchLines();
			}
		} catch (err: any) {
			push(`Error: ${err?.message ?? err}`, "error");
		}
	}

	// small helper to render a table header cell
	function th(text: string) {
		return <th style={{ textAlign: "left", padding: "0.25rem 0.5rem" }}>{text}</th>;
	}

	if (!authorized) {
		return (
			<div className="dashboard container">
				<h2 className="muted">Enter password to view Dashboard</h2>
				<form onSubmit={handleAuthSubmit} className="inline" style={{ marginTop: 8 }}>
					<input className="form-control" type="password" value={passwordAttempt} onChange={(e) => setPasswordAttempt(e.target.value)} placeholder="Password" />
					<button type="submit" className="btn btn-primary">Enter</button>
				</form>
				{authError && <div className="muted" style={{ color: "#c0392b", marginTop: "0.5rem" }}>{authError}</div>}
			</div>
		);
	}

	return (
		<div className="dashboard container">
			<Toasts toasts={toasts} />
			<div className="section-nav">
				<button onClick={() => setSection("sims")} className={section === "sims" ? "btn btn-primary" : "btn btn-outline"}>Sims</button>
				<button onClick={() => setSection("phones")} className={section === "phones" ? "btn btn-primary" : "btn btn-outline"}>Phones</button>
				<button onClick={() => setSection("lines")} className={section === "lines" ? "btn btn-primary" : "btn btn-outline"}>Phone Lines</button>
			</div>

			<div style={{ marginBottom: 16 }}>
				{section === "sims" && (
					<div>
						<div className="row-between">
							<h3 style={{ margin: 0 }}>Sims</h3>
							<div>
								<button onClick={() => openCreate("sims")} className="btn btn-success">Create Sim</button>
							</div>
						</div>
						<div style={{ marginTop: 8 }}>
							{simsLoading ? (
								<div className="muted">Loading sims...</div>
							) : (
								<div className="table-responsive">
									<table className="table table-striped">
										<thead>
											<tr>
												{th("Sim Number")}
												{th("Status")}
												{th("Added On")}
												{th("Updated On")}
												{th("Actions")}
											</tr>
										</thead>
										<tbody>
											{sims.map((s) => (
												<tr key={s.sim_number}>
													<td>{s.sim_number}</td>
													<td>{s.sim_status}</td>
													<td>{formatMySQLDatetime(s.added_on)}</td>
													<td>{formatMySQLDatetime(s.updated_on)}</td>
													<td>
														<button onClick={() => openEdit("sims", s)} className="btn btn-sm btn-outline" style={{ marginRight: 8 }}>Edit</button>
														<button onClick={() => handleDelete("sims", s.sim_number)} className="btn btn-sm btn-danger">Delete</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				)}

				{section === "phones" && (
					<div>
						<div className="row-between">
							<h3 style={{ margin: 0 }}>Phones</h3>
							<div>
								<button onClick={() => openCreate("phones")} className="btn btn-success">Create Phone</button>
							</div>
						</div>
						<div style={{ marginTop: 8 }}>
							{phonesLoading ? (
								<div className="muted">Loading phones...</div>
							) : (
								<div className="table-responsive">
									<table className="table table-striped">
										<thead>
											<tr>
												{th("IMEI")}
												{th("SIM")}
												{th("Location")}
												{th("Status")}
												{th("Added On")}
												{th("Updated On")}
												{th("Actions")}
											</tr>
										</thead>
										<tbody>
											{phones.map((p) => (
												<tr key={p.imei}>
													<td>{p.imei}</td>
													<td>{p.sim_number}</td>
													<td>{p.location}</td>
													<td>{p.phone_status}</td>
													<td>{formatMySQLDatetime(p.added_on)}</td>
													<td>{formatMySQLDatetime(p.updated_on)}</td>
													<td>
														<button onClick={() => openEdit("phones", p)} className="btn btn-sm btn-outline" style={{ marginRight: 8 }}>Edit</button>
														<button onClick={() => handleDelete("phones", p.imei)} className="btn btn-sm btn-danger">Delete</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				)}

				{section === "lines" && (
					<div>
						<div className="row-between">
							<h3 style={{ margin: 0 }}>Phone Lines</h3>
							<div>
								<button onClick={() => openCreate("lines")} className="btn btn-success">Create Phone Line</button>
							</div>
						</div>
						<div style={{ marginTop: 8 }}>
							{linesLoading ? (
								<div className="muted">Loading lines...</div>
							) : (
								<div className="table-responsive">
									<table className="table table-striped">
										<thead>
											<tr>
												{th("Phone Number")}
												{th("Status")}
												{th("Owner")}
												{th("Contract")}
												{th("SIM")}
												{th("Activated On")}
												{th("Actions")}
											</tr>
										</thead>
										<tbody>
											{lines.map((l) => (
												<tr key={l.phone_number}>
													<td>{l.phone_number}</td>
													<td>{l.line_status}</td>
													<td>{l.current_owner}</td>
													<td>{l.contract_id}</td>
													<td>{l.sim_number}</td>
													<td>{formatMySQLDatetime(l.activated_on)}</td>
													<td>
														<button onClick={() => openEdit("lines", l)} className="btn btn-sm btn-outline" style={{ marginRight: 8 }}>Edit</button>
														<button onClick={() => handleDelete("lines", l.phone_number)} className="btn btn-sm btn-danger">Delete</button>
													</td>
												</tr>
											))}
										</tbody>
									</table>
								</div>
							)}
						</div>
					</div>
				)}
			</div>

			<Modal open={modalOpen} title={modalMode === "create" ? `Create ${modalResource}` : `Edit ${modalResource}`} onClose={() => setModalOpen(false)}>
				<form onSubmit={handleModalSave} style={{ display: "grid", gap: 8 }}>
					{modalResource === "sims" && (
						<>
							<label>
								Sim Number
								<input className="form-control" required value={formState.sim_number ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, sim_number: e.target.value }))} />
							</label>
							<label>
								Status
								<input className="form-control" value={formState.sim_status ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, sim_status: e.target.value }))} />
							</label>
						</>
					)}

					{modalResource === "phones" && (
						<>
							<label>
								IMEI
								<input className="form-control" required value={formState.imei ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, imei: e.target.value }))} />
							</label>
							<label>
								SIM Number
								<input className="form-control" value={formState.sim_number ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, sim_number: e.target.value }))} />
							</label>
							<label>
								Location
								<input className="form-control" value={formState.location ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, location: e.target.value }))} />
							</label>
							<label>
								Status
								<input className="form-control" value={formState.phone_status ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, phone_status: e.target.value }))} />
							</label>
						</>
					)}

					{modalResource === "lines" && (
						<>
							<label>
								Phone Number
								<input className="form-control" required value={formState.phone_number ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, phone_number: e.target.value }))} />
							</label>
							<label>
								Status
								<input className="form-control" value={formState.line_status ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, line_status: e.target.value }))} />
							</label>
							<label>
								Owner Type
								<input className="form-control" value={formState.owner_type ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, owner_type: e.target.value }))} />
							</label>
							<label>
								Contract ID
								<input className="form-control" value={formState.contract_id ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, contract_id: e.target.value }))} />
							</label>
							<label>
								Current Owner
								<input className="form-control" value={formState.current_owner ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, current_owner: e.target.value }))} />
							</label>
							<label>
								SIM Number
								<input className="form-control" value={formState.sim_number ?? ""} onChange={(e) => setFormState((s: any) => ({ ...s, sim_number: e.target.value }))} />
							</label>
						</>
					)}

					<div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
						<button type="button" onClick={() => setModalOpen(false)}>Cancel</button>
						<button type="submit">{modalMode === "create" ? "Create" : "Save"}</button>
					</div>
				</form>
			</Modal>
		</div>
	);
}

