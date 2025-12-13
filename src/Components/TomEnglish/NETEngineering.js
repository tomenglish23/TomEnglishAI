import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function NETEngineering() {

    return (
        <div style={{ opacity: 1.0 }}>
            <TopBar />
            <header>
                <h1>.NET Engineering Toolchain</h1>
                <p>Upstream (Jira, Confluence) → Pipeline (GitHub → Jenkins → Scans → Artifactory → PCF)</p>
            </header>
            <main className="net-eng-page">
                <section className="toolchain-section">
                    <h2>CI/CD Toolchain Role Matrix</h2>

                    {/* <table className="toolchain-table"> */}
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <colgroup>
                            <col style={{ width: '12%' }} />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left" }}>Tool</th>
                                <th style={{ textAlign: "left" }}>Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jira</td>
                                <td>Stories bugs priorities workflow status</td>
                            </tr>
                            <tr>
                                <td>Confluence</td>
                                <td>Specs design notes runbooks KT docs</td>
                            </tr>
                            <tr>
                                <td>GitHub</td>
                                <td>Code branches PRs reviews branch policy</td>
                            </tr>
                            <tr>
                                <td>Jenkins</td>
                                <td>Builds tests scans packaging deployments</td>
                            </tr>
                            <tr>
                                <td>Artifactory</td>
                                <td>JARs DLLs Docker imgs versioned artifacts</td>
                            </tr>
                            <tr>
                                <td>SonarQube</td>
                                <td>Dup coverage complexity code smells</td>
                            </tr>
                            <tr>
                                <td>Checkmarx</td>
                                <td>Security flaws in source before deploy</td>
                            </tr>
                            <tr>
                                <td>Black Duck</td>
                                <td>Vulnerable or risky open source dependencies</td>
                            </tr>
                            <tr>
                                <td>TruffleHog</td>
                                <td>Exposed tokens passwords keys in commits</td>
                            </tr>
                            <tr>
                                <td>AppDynamics</td>
                                <td>Response times errors slow calls resource use</td>
                            </tr>
                            <tr>
                                <td><strong>PCF</strong></td>
                                <td>Runs apps; mngs routes/scaling/cfgs/bindings</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="toolchain-section">
                    <h2>Upstream → Pipeline → PCF Mapping</h2>

                    {/* <table className="toolchain-table"> */}
                    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                        <colgroup>
                            <col style={{ width: '7%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '14%' }} />
                            <col style={{ width: '8%' }} />
                            <col style={{ width: '26%' }} />
                            <col style={{ width: '12%' }} />
                            <col style={{ width: '10%' }} />
                            <col style={{ width: '14%' }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "left" }}>Where</th>
                                <th style={{ textAlign: "left" }}>Category</th>
                                <th style={{ textAlign: "left" }}>PL Stage</th>
                                <th style={{ textAlign: "left" }}>Source</th>
                                <th style={{ textAlign: "left" }}>Verb</th>
                                <th style={{ textAlign: "left" }}>Product</th>
                                <th style={{ textAlign: "left" }}>Action</th>
                                <th style={{ textAlign: "left" }}>Object</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pre-PL</td>
                                <td>Hub Collab</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Jira</td>
                                <td>Store</td>
                                <td>Reqs track</td>
                            </tr>
                            <tr>
                                <td>Pre-PL</td>
                                <td>Hub Collab</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Confluence</td>
                                <td>Store</td>
                                <td>KT docs</td>
                            </tr>

                            <tr>
                                <td>PL→PCF</td>
                                <td>Src Ctrl</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>GitHub</td>
                                <td>Store</td>
                                <td>SCC</td>
                            </tr>

                            <tr>
                                <td>PL→PCF</td>
                                <td>Orch</td>
                                <td>Build stage</td>
                                <td>GitHub</td>
                                <td>trigger on code push or PR open</td>
                                <td>Jenkins</td>
                                <td>Run</td>
                                <td>PL &amp; tests</td>
                            </tr>

                            <tr>
                                <td>PL→PCF</td>
                                <td>Orch</td>
                                <td>Artifact stage</td>
                                <td>Jenkins</td>
                                <td>publish bld output</td>
                                <td>Artifactory</td>
                                <td>Store</td>
                                <td>Deploy units</td>
                            </tr>

                            <tr>
                                <td>PL→PCF</td>
                                <td>Gate Scan</td>
                                <td>Quality gate stage</td>
                                <td>Jenkins</td>
                                <td>trigger</td>
                                <td>SonarQube</td>
                                <td>Check</td>
                                <td>Code qual</td>
                            </tr>

                            <tr>
                                <td>PL→PCF</td>
                                <td>Gate Scan</td>
                                <td>Security gate stage</td>
                                <td>Jenkins</td>
                                <td>trigger</td>
                                <td>Checkmarx</td>
                                <td>Find</td>
                                <td>Sec (SAST)</td>
                            </tr>
                            <tr>
                                <td>PL→PCF</td>
                                <td>Gate Scan</td>
                                <td>Security gate stage</td>
                                <td>Jenkins</td>
                                <td>trigger</td>
                                <td>Black Duck</td>
                                <td>Flag</td>
                                <td>Sec (OSS risk)</td>
                            </tr>
                            <tr>
                                <td>PL→PCF</td>
                                <td>Gate Scan</td>
                                <td>Security gate stage</td>
                                <td>Jenkins</td>
                                <td>trigger</td>
                                <td>TruffleHog</td>
                                <td>Find</td>
                                <td>Secrets</td>
                            </tr>

                            <tr>
                                <td>PL→PCF</td>
                                <td>Monitor</td>
                                <td>Post-deploy hooks</td>
                                <td>Jenkins</td>
                                <td>trigger</td>
                                <td>AppDynamics</td>
                                <td>Track</td>
                                <td>App perf</td>
                            </tr>

                            <tr>
                                <td>RT Platf</td>
                                <td>Platform</td>
                                <td>Deploy stage</td>
                                <td>Jenkins</td>
                                <td>exec cf push; deploy app; start app</td>
                                <td>PCF</td>
                                <td>Run/Mng</td>
                                <td>Deploy &amp; RT</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}
