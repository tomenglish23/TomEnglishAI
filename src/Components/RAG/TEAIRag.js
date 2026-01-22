import React from 'react';
import TopBar from '../Menu/TopBar';

const TEAIRag = () => {

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '16px', 
                  fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: '1000' }}>

      <TopBar />
      <center>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.96em', alignItems: 'center', color: '#2475d2' }}>
      TEAI RAG System</p>
      <p style={{ margin: '0px', fontSize: '1.36em', alignItems: 'center', color: '#2475d2' }}>
      TEAI RAG runs on Render.com - a web service platform </p>
      </center>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      Pardon the latency. 
      The links take a 1-2 minutes to load due to Render.com's COLD START. <br /> 
      That is expected behavior while using the FREE Render service. 
      We will upgrade soon.</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      Repeat:&nbsp;<b>In each implementation,&nbsp;
      <u>you will wait 1-2 minutes for dropdownlists to load</u></b>.</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>

      <div className="card-indent">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <colgroup>
            <col style={{ width: '43%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '4px' }}>
                <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
                  <a href="TEAIRagPT" target="_blank" rel="noopener noreferrer">
                    Physical Therapy Assistant</a></p>
              </td>
              <td style={{ border: '1px solid black', fontSize: '1.10em', padding: '4px', color: '#2475d2' }}>
                <details><summary> 32 Files</summary>
    &nbsp; clinical-protocols<br />
    &nbsp; masshealth-pt-rules<br />
    &nbsp; medicare-part-a<br />
  <details><summary> ---codes</summary>
    &nbsp;&nbsp;&nbsp;&nbsp; 97110<br />
    &nbsp;&nbsp;&nbsp;&nbsp; 97112<br />
    &nbsp;&nbsp;&nbsp;&nbsp; 97116<br />
    &nbsp;&nbsp;&nbsp;&nbsp; 97530<br />
    &nbsp;&nbsp;&nbsp;&nbsp; cpt-codes-related</details>
  <details><summary> ---icd10</summary>
    &nbsp;&nbsp;&nbsp;&nbsp; icd10-expanded<br />
    &nbsp;&nbsp;&nbsp;&nbsp; icd10-gait-mobility<br />
    &nbsp;&nbsp;&nbsp;&nbsp; icd10-musculoskeletal<br />
    &nbsp;&nbsp;&nbsp;&nbsp; icd10-neurological<br />
    &nbsp;&nbsp;&nbsp;&nbsp; icd10-post-surgical</details>
  <details><summary> ---mappings</summary>
    &nbsp; &nbsp; &nbsp; cpt-icd10-pairings</details>
  <details><summary> ---modifiers</summary>
    &nbsp; &nbsp; &nbsp;modifiers-pt</details>
  <details><summary> ---reference</summary>
    &nbsp;&nbsp;&nbsp;&nbsp; abbreviations<br />
    &nbsp;&nbsp;&nbsp;&nbsp; anatomy-body-regions<br />
    &nbsp;&nbsp;&nbsp;&nbsp; billing-rules<br />
    &nbsp;&nbsp;&nbsp;&nbsp; billing-scenarios<br />
    &nbsp;&nbsp;&nbsp;&nbsp; denials-troubleshooting<br />
    &nbsp;&nbsp;&nbsp;&nbsp; diagnosis-profiles<br />
    &nbsp;&nbsp;&nbsp;&nbsp; documentation-templates<br />
    &nbsp;&nbsp;&nbsp;&nbsp; exercise-library<br />
    &nbsp;&nbsp;&nbsp;&nbsp; form-templates<br />
    &nbsp;&nbsp;&nbsp;&nbsp; functional-goals-library<br />
    &nbsp;&nbsp;&nbsp;&nbsp; hep-templates<br />
    &nbsp;&nbsp;&nbsp;&nbsp; outcome-measures<br />
    &nbsp;&nbsp;&nbsp;&nbsp; payer-policies<br />
    &nbsp;&nbsp;&nbsp;&nbsp; quick-reference-cards<br />
    &nbsp;&nbsp;&nbsp;&nbsp; red-flags-contraindications<br />
    &nbsp;&nbsp;&nbsp;&nbsp; special-tests<br />
    &nbsp;&nbsp;&nbsp;&nbsp; treatment-protocols</details>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div className="card-indent">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <colgroup>
            <col style={{ width: '43%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '4px' }}>
                <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
                  <a href="TEAIRagHC" target="_blank" rel="noopener noreferrer">
                    Healthcare Certifications for TN &amp; W VA</a></p>
              </td>
              <td style={{ border: '1px solid black', fontSize: '1.10em', padding: '4px', color: '#2475d2' }}>
                <details className="section" open={true}><summary> Healthcare Certifications</summary>
                  
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}

      <div className="card-indent">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <colgroup>
            <col style={{ width: '43%' }} />
          </colgroup>
            <tbody>
              <tr>
              <td style={{ border: '1px solid black', padding: '4px' }}>
                <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
                  <a href="TEAIAgenticRAG" target="_blank" rel="noopener noreferrer">
                    Healthcare Certifications for TN &amp; W VA</a></p>
              </td>
              <td style={{ border: '1px solid black', fontSize: '1.10em', padding: '4px', color: '#2475d2' }}>
                <details className="section" open={true}><summary> TEAIAgenticRAG HC</summary>
                  
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="card-indent">
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <colgroup>
            <col style={{ width: '43%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '4px' }}>
                <p style={{ margin: '0px', fontSize: '1.20em', color: '#2475d2' }}>
                  <a href="TEAIRagQA" target="_blank" rel="noopener noreferrer">
                    SoftwareInterview Q&As</a></p>
              </td>
              <td style={{ border: '1px solid black', fontSize: '1.10em', padding: '4px', color: '#2475d2' }}>
                <details className="section" open={true}><summary> Software Interview Q&As</summary>
  <details><summary> &nbsp;&nbsp;---C#</summary>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delegates<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Generics<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Collections<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Assemblies<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Serialization<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Attributes<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Constructors<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Garbage Collection, Finally, Dispose<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrays<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Safe and Unsafe Code, Managed code<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Strings<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Interfaces<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Access Modifiers<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Structs:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Structs vs Classes:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Classes<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Static Classes and Methods<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sealed<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Method Overloading<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Overloading vs Overriding<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Abstract Class<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual method vs Abstract method:<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Virtual Methods<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Databases<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cleanup<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trace vs Debug<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Threading<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Value and Reference Types<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exceptions<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Arrays<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Array Declaration<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Array Elements<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Array Size, Length, Range, Index, Subscript<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Array: Multi-dimensional arrays<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Array: Jagged Arrays<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More
  </details>
  <details><summary>&nbsp;&nbsp;---SQL SERVER</summary>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENERAL<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VERSIONS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PROGRAMMING QUESTIONS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SQL INJECTION<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BACKUP LOGS and BULK COMMANDS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USERS, AUTHENTICATION, LOGIN<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AGENTS, TASKS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LINKED SERVERS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIRRORING<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOCKS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PERFORMANCE<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;EXCEPTIONS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NORMALIZATION<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COMMANDS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FUNCTIONS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;USER-DEFINED FUNCTIONS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBQUERIES<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TABLES and COLUMNS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VIEWS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;COLUMNS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;INDEXES<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONSTRAINTS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SQL SERVER COMMANDS IN 4 LOGICAL GROUPS<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STORED PROCEDURES<br />
  </details>
  </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>




    </div>
  );
};

export default TEAIRag;