import React from "react";

const App = () => {
  return (
    <>
      <div className="admin-shell">
        <div className="sidebar-backdrop" data-sidebar-close />
        <aside
          className="admin-sidebar"
          id="adminSidebar"
          aria-label="Main navigation"
        >
          <div className="sidebar-header">
            <a
              className="brand-mark"
              href="index.html"
              aria-label="adminHMD dashboard"
            >
              <span className="brand-icon">
                <i className="bi bi-grid-1x2-fill" aria-hidden="true" />
              </span>
              <span className="brand-copy">
                <span className="brand-title">adminHMD</span>
                <span className="brand-subtitle">Admin Template</span>
              </span>
            </a>
          </div>
          <nav className="sidebar-nav">
            <a
              className="nav-link active"
              href="index.html"
              aria-current="page"
            >
              <span className="nav-icon">
                <i className="bi bi-speedometer2" aria-hidden="true" />
              </span>
              <span className="nav-text">Dashboard</span>
            </a>
            <a className="nav-link" href="users.html">
              <span className="nav-icon">
                <i className="bi bi-people" aria-hidden="true" />
              </span>
              <span className="nav-text">Users</span>
            </a>
            <a className="nav-link" href="add-user.html">
              <span className="nav-icon">
                <i className="bi bi-person-plus" aria-hidden="true" />
              </span>
              <span className="nav-text">Add User</span>
            </a>
            <a className="nav-link" href="profile.html">
              <span className="nav-icon">
                <i className="bi bi-person-badge" aria-hidden="true" />
              </span>
              <span className="nav-text">Profile</span>
            </a>
            <a className="nav-link" href="charts.html">
              <span className="nav-icon">
                <i className="bi bi-bar-chart-line" aria-hidden="true" />
              </span>
              <span className="nav-text">Charts</span>
            </a>
            <a className="nav-link" href="tables.html">
              <span className="nav-icon">
                <i className="bi bi-table" aria-hidden="true" />
              </span>
              <span className="nav-text">Tables</span>
            </a>
            <a className="nav-link" href="forms.html">
              <span className="nav-icon">
                <i className="bi bi-ui-checks-grid" aria-hidden="true" />
              </span>
              <span className="nav-text">Forms</span>
            </a>
            <a className="nav-link" href="components.html">
              <span className="nav-icon">
                <i className="bi bi-grid-3x3-gap" aria-hidden="true" />
              </span>
              <span className="nav-text">Components</span>
            </a>
            <a className="nav-link" href="alerts.html">
              <span className="nav-icon">
                <i className="bi bi-exclamation-triangle" aria-hidden="true" />
              </span>
              <span className="nav-text">Alerts</span>
            </a>
            <a className="nav-link" href="modals.html">
              <span className="nav-icon">
                <i className="bi bi-window-stack" aria-hidden="true" />
              </span>
              <span className="nav-text">Modals</span>
            </a>
            <a className="nav-link" href="settings.html">
              <span className="nav-icon">
                <i className="bi bi-gear" aria-hidden="true" />
              </span>
              <span className="nav-text">Settings</span>
            </a>
            <a className="nav-link" href="blank.html">
              <span className="nav-icon">
                <i className="bi bi-file-earmark" aria-hidden="true" />
              </span>
              <span className="nav-text">Blank Page</span>
            </a>
          </nav>
          <div className="sidebar-user">
            <img
              className="avatar-img avatar-md sidebar-user-avatar"
              src="../assets/images/avatar/avatar.jpg"
              alt="Admin Hasan"
            />
            <strong>Admin Hasan</strong>
            <small>Active Workspace</small>
          </div>
          <div className="sidebar-footer">
            <span className="status-dot" />
            <span className="sidebar-footer-text">System running smoothly</span>
          </div>
        </aside>
        <div className="admin-main">
          <nav className="navbar admin-navbar navbar-expand bg-white">
            <div className="container-fluid px-3 px-lg-4">
              <button
                className="sidebar-toggle"
                type="button"
                data-sidebar-toggle
                aria-controls="adminSidebar"
                aria-expanded="true"
                aria-label="Toggle sidebar"
              >
                <span />
                <span />
                <span />
              </button>
              <form className="d-none d-md-flex ms-3 flex-grow-1" role="search">
                <input
                  className="form-control search-input"
                  type="search"
                  placeholder="Search users, orders, reports"
                  aria-label="Search"
                />
              </form>
              <div className="navbar-actions ms-auto">
                <button
                  className="icon-button theme-toggle"
                  type="button"
                  data-theme-toggle
                  aria-label="Switch color theme"
                  title="Switch color theme"
                >
                  <i
                    className="bi bi-moon-stars"
                    data-theme-icon
                    aria-hidden="true"
                  />
                </button>
                <div className="dropdown">
                  <button
                    className="icon-button"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    aria-label="Notifications"
                  >
                    <span className="notification-dot" />
                    <i className="bi bi-bell" aria-hidden="true" />
                  </button>
                  <div className="dropdown-menu dropdown-menu-end notification-menu">
                    <div className="dropdown-header fw-bold text-body">
                      Notifications
                    </div>
                    <a className="dropdown-item" href="users.html">
                      <span className="notification-title">
                        New user registered
                      </span>
                      <span className="notification-time">4 minutes ago</span>
                    </a>
                    <a className="dropdown-item" href="charts.html">
                      <span className="notification-title">
                        Revenue target reached
                      </span>
                      <span className="notification-time">32 minutes ago</span>
                    </a>
                    <a className="dropdown-item" href="settings.html">
                      <span className="notification-title">
                        Security review completed
                      </span>
                      <span className="notification-time">1 hour ago</span>
                    </a>
                  </div>
                </div>
                <div className="dropdown">
                  <button
                    className="profile-button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="avatar-img avatar-sm"
                      src="../assets/images/avatar/avatar.jpg"
                      alt="Admin Hasan"
                    />
                    <span className="profile-name d-none d-sm-inline">
                      Admin Hasan
                    </span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="settings.html">
                        Account settings
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="login.html">
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          <main className="dashboard-content">
            <div className="container-fluid px-3 px-lg-4 py-4">
              <div className="page-heading">
                <div className="page-heading-copy">
                  <span className="page-icon">
                    <i className="bi bi-speedometer2" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="eyebrow mb-1">Overview</p>
                    <h1 className="h3 mb-1">Dashboard</h1>
                    <p className="text-muted mb-0">
                      Monitor performance, sales, users, and support from one
                      clean workspace.
                    </p>
                  </div>
                </div>
                <div className="heading-actions">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    type="button"
                  >
                    <i className="bi bi-download" aria-hidden="true" /> Export
                  </button>
                  <button className="btn btn-primary btn-sm" type="button">
                    <i className="bi bi-file-earmark-plus" aria-hidden="true" />{" "}
                    Create Report
                  </button>
                </div>
              </div>
              <section className="row g-3 mt-1" aria-label="Dashboard metrics">
                <div className="col-12 col-sm-6 col-xl-3">
                  <article className="metric-card metric-primary">
                    <div className="metric-top">
                      <span className="metric-label">Revenue</span>
                      <span className="metric-icon">
                        <i
                          className="bi bi-currency-dollar"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="metric-value">$48,240</div>
                    <div className="metric-meta">
                      <span className="text-success">+12.5%</span>
                      <span>from last month</span>
                    </div>
                  </article>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <article className="metric-card metric-success">
                    <div className="metric-top">
                      <span className="metric-label">Orders</span>
                      <span className="metric-icon">
                        <i className="bi bi-bag-check" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="metric-value">1,284</div>
                    <div className="metric-meta">
                      <span className="text-success">+8.2%</span>
                      <span>new orders</span>
                    </div>
                  </article>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <article className="metric-card metric-warning">
                    <div className="metric-top">
                      <span className="metric-label">Customers</span>
                      <span className="metric-icon">
                        <i className="bi bi-people" aria-hidden="true" />
                      </span>
                    </div>
                    <div className="metric-value">8,742</div>
                    <div className="metric-meta">
                      <span className="text-success">+5.1%</span>
                      <span>active users</span>
                    </div>
                  </article>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <article className="metric-card metric-danger">
                    <div className="metric-top">
                      <span className="metric-label">Tickets</span>
                      <span className="metric-icon">
                        <i
                          className="bi bi-life-preserver"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <div className="metric-value">36</div>
                    <div className="metric-meta">
                      <span className="text-danger">3 urgent</span>
                      <span>need review</span>
                    </div>
                  </article>
                </div>
              </section>
              <section className="row g-3 mt-1">
                <div className="col-12 col-xl-8">
                  <div className="panel">
                    <div className="panel-header">
                      <div>
                        <h2 className="h5 mb-1 section-title">
                          <i
                            className="bi bi-graph-up-arrow"
                            aria-hidden="true"
                          />
                          <span>Sales Performance</span>
                        </h2>
                        <p className="text-muted mb-0">
                          Monthly revenue compared with operational targets.
                        </p>
                      </div>
                      <a className="btn btn-light btn-sm" href="charts.html">
                        View Details
                      </a>
                    </div>
                    <div
                      className="chart-bars"
                      aria-label="Sales performance chart"
                    >
                      <div className="chart-column bar-42">
                        <span />
                        <small>Jan</small>
                      </div>
                      <div className="chart-column bar-58">
                        <span />
                        <small>Feb</small>
                      </div>
                      <div className="chart-column bar-51">
                        <span />
                        <small>Mar</small>
                      </div>
                      <div className="chart-column bar-72">
                        <span />
                        <small>Apr</small>
                      </div>
                      <div className="chart-column bar-66">
                        <span />
                        <small>May</small>
                      </div>
                      <div className="chart-column bar-83">
                        <span />
                        <small>Jun</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4">
                  <div className="panel h-100">
                    <div className="panel-header">
                      <div>
                        <h2 className="h5 mb-1 section-title">
                          <i className="bi bi-activity" aria-hidden="true" />
                          <span>Team Activity</span>
                        </h2>
                        <p className="text-muted mb-0">
                          Recent operational updates.
                        </p>
                      </div>
                    </div>
                    <div className="activity-list">
                      <div className="activity-item">
                        <span className="activity-dot bg-primary" />
                        <div>
                          <p className="mb-1 fw-semibold">
                            New campaign launched
                          </p>
                          <p className="text-muted small mb-0">
                            Marketing team published the May offer.
                          </p>
                        </div>
                      </div>
                      <div className="activity-item">
                        <span className="activity-dot bg-success" />
                        <div>
                          <p className="mb-1 fw-semibold">
                            Payment batch cleared
                          </p>
                          <p className="text-muted small mb-0">
                            246 invoices were processed successfully.
                          </p>
                        </div>
                      </div>
                      <div className="activity-item">
                        <span className="activity-dot bg-warning" />
                        <div>
                          <p className="mb-1 fw-semibold">
                            Support queue rising
                          </p>
                          <p className="text-muted small mb-0">
                            Average first response time is 18 minutes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="panel mt-3">
                <div className="panel-header">
                  <div>
                    <h2 className="h5 mb-1 section-title">
                      <i className="bi bi-people" aria-hidden="true" />
                      <span>Recent Users</span>
                    </h2>
                    <p className="text-muted mb-0">
                      Latest account activity across the workspace.
                    </p>
                  </div>
                  <a
                    className="btn btn-outline-secondary btn-sm"
                    href="users.html"
                  >
                    Manage Users
                  </a>
                </div>
                <div className="table-responsive">
                  <table className="table align-middle mb-0">
                    <thead>
                      <tr>
                        <th scope="col">User</th>
                        <th scope="col">Role</th>
                        <th scope="col">Team</th>
                        <th scope="col">Status</th>
                        <th scope="col">Joined</th>
                        <th scope="col" className="text-end">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              className="avatar-img avatar-sm"
                              src="../assets/images/avatar/avatar-1.jpg"
                              alt="Sarah Ahmed"
                            />
                            <div>
                              <p className="fw-semibold mb-0">Sarah Ahmed</p>
                              <p className="text-muted small mb-0">
                                sarah@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>Admin</td>
                        <td>Operations</td>
                        <td>
                          <span className="badge text-bg-success">Active</span>
                        </td>
                        <td>Jan 12, 2026</td>
                        <td className="text-end">
                          <a
                            className="btn btn-light btn-sm"
                            href="user-details.html"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              className="avatar-img avatar-sm"
                              src="../assets/images/avatar/avatar-2.jpg"
                              alt="Rafi Khan"
                            />
                            <div>
                              <p className="fw-semibold mb-0">Rafi Khan</p>
                              <p className="text-muted small mb-0">
                                rafi@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>Manager</td>
                        <td>Sales</td>
                        <td>
                          <span className="badge text-bg-success">Active</span>
                        </td>
                        <td>Feb 03, 2026</td>
                        <td className="text-end">
                          <a
                            className="btn btn-light btn-sm"
                            href="user-details.html"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              className="avatar-img avatar-sm"
                              src="../assets/images/avatar/avatar-3.jpg"
                              alt="Nadia Islam"
                            />
                            <div>
                              <p className="fw-semibold mb-0">Nadia Islam</p>
                              <p className="text-muted small mb-0">
                                nadia@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>Editor</td>
                        <td>Content</td>
                        <td>
                          <span className="badge text-bg-warning">Pending</span>
                        </td>
                        <td>Mar 18, 2026</td>
                        <td className="text-end">
                          <a
                            className="btn btn-light btn-sm"
                            href="user-details.html"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              className="avatar-img avatar-sm"
                              src="../assets/images/avatar/avatar-4.jpg"
                              alt="Mina Torres"
                            />
                            <div>
                              <p className="fw-semibold mb-0">Mina Torres</p>
                              <p className="text-muted small mb-0">
                                mina@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>Viewer</td>
                        <td>Finance</td>
                        <td>
                          <span className="badge text-bg-secondary">
                            Suspended
                          </span>
                        </td>
                        <td>Apr 07, 2026</td>
                        <td className="text-end">
                          <a
                            className="btn btn-light btn-sm"
                            href="user-details.html"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              className="avatar-img avatar-sm"
                              src="../assets/images/avatar/avatar-5.jpg"
                              alt="Jon Oliver"
                            />
                            <div>
                              <p className="fw-semibold mb-0">Jon Oliver</p>
                              <p className="text-muted small mb-0">
                                jon@example.com
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>Analyst</td>
                        <td>Data</td>
                        <td>
                          <span className="badge text-bg-success">Active</span>
                        </td>
                        <td>Apr 22, 2026</td>
                        <td className="text-end">
                          <a
                            className="btn btn-light btn-sm"
                            href="user-details.html"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </main>
          <footer className="admin-footer">
            <div className="container-fluid px-3 px-lg-4">
              <span>
                Copyright 2026 adminHMD. <br /> Developed by{" "}
                <a
                  target="_blank"
                  className="fw-bold text-success"
                  href="https://github.com/HasanMahmudDev"
                >
                  Md. Hasan Mahmud
                </a>{" "}
                • Distributed by{" "}
                <a
                  target="_blank"
                  className="fw-bold text-success"
                  href="https://themewagon.com"
                >
                  ThemeWagon
                </a>{" "}
              </span>
              <span>Professional dashboard template.</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;
