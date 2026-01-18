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
      The links take a full minute to load due to Render.com's COLD START. <br /> 
      That is expected behavior while using the FREE Render service. 
      We will upgrade soon.</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
        <a href="TEAIRagPT" target="_blank" rel="noopener noreferrer">TEAI RAG Physical Therapy Assistant</a></p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
        <a href="TEAIRagHC" target="_blank" rel="noopener noreferrer">TEAI RAG Healthcare Certifications for TN and W VA</a></p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
      &nbsp;</p>
      <p style={{ margin: '0px', fontSize: '1.20em', alignItems: 'center', color: '#2475d2' }}>
        <a href="TEAIRagQA" target="_blank" rel="noopener noreferrer">TEAI RAG Interview Q&As</a></p>

    </div>
  );
};

export default TEAIRag;