// import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";
// import { CORPUS } from "./TEAITmcCorpus";

const CORPUS = [
{
 "domain": "Mechanical Ventilation", 
 "question": "What is mechanical ventilation and when is it indicated?", 
 "answer": "Mechanical ventilation is machine-supported or machine-replaced breathing. Indications include apnea or respiratory arrest, acute hypoxemic or hypercapnic respiratory failure, impending respiratory failure with increased work of breathing, airway protection in unconscious patients, and controlled ventilation during critical illness or surgery. The goal is to support gas exchange while the underlying cause is treated."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the difference between volume control and pressure control ventilation?", 
 "answer": "Volume control (VC) delivers a set tidal volume with each breath; peak airway pressure varies with compliance and resistance. Pressure control (PC) delivers a set pressure limit; tidal volume varies with compliance and resistance. VC guarantees volume delivery and minute ventilation. PC limits pressure exposure and uses a decelerating flow waveform that may improve gas distribution. Use VC when consistent ventilation is critical; use PC when limiting peak pressure is the priority."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is assist-control (AC) ventilation?", 
 "answer": "Assist-control (AC) delivers a full mandatory breath at the set rate and parameters. Every patient-triggered breath above the set rate also receives a full mandatory breath. AC ensures a minimum minute ventilation regardless of patient effort level. It is the most common mode for initial ventilator management. A disadvantage is that patient tachypnea produces high minute volumes and respiratory alkalosis. All breaths in AC are the same size whether mandatory or patient-triggered."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is SIMV (synchronized intermittent mandatory ventilation)?", 
 "answer": "SIMV delivers mandatory breaths at a set rate synchronized with patient inspiratory effort. Spontaneous breaths above the set rate receive no mandatory volume support (unless pressure support is added). SIMV allows the patient to perform work above the set rate. It was historically used for weaning by reducing the mandatory rate gradually, but daily spontaneous breathing trials are now the preferred weaning method. SIMV with PS is a common combination mode."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is pressure support ventilation (PSV)?", 
 "answer": "PSV delivers a clinician-set pressure boost above PEEP during every patient-triggered inspiratory effort. The patient controls rate, inspiratory time, and tidal volume. PSV reduces work of breathing without fully controlling ventilation. There is no backup rate \u2014 the patient must initiate every breath. Used for weaning, spontaneous breathing trials, and overcoming ETT resistance. Typical SBT PSV level is 5-8 cmH2O over PEEP 5 cmH2O. High PSV with large VT risks patient self-inflicted lung injury (P-SILI)."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is CPAP in mechanical ventilation?", 
 "answer": "CPAP (continuous positive airway pressure) maintains a constant elevated baseline pressure throughout the entire breathing cycle with no inspiratory support. The patient breathes entirely spontaneously. On a ventilator CPAP mode is used to assess extubation readiness (SBT on CPAP 5 cmH2O). Via mask CPAP treats obstructive sleep apnea by pneumatically splinting the airway and treats cardiogenic pulmonary edema by recruiting flooded alveoli and reducing cardiac preload and afterload."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What are typical initial ventilator settings for an adult patient?", 
 "answer": "Typical initial adult settings: mode = AC/VC, tidal volume = 6-8 mL/kg IBW, respiratory rate = 12-16 breaths/min, FiO2 = 1.0 initially then wean to lowest effective level, PEEP = 5 cmH2O, inspiratory flow = 40-60 L/min, I:E ratio = 1:2. Obtain ABG 30 minutes after initiation and adjust. In ARDS use 6 mL/kg IBW, higher PEEP per ARDSNet table, and accept permissive hypercapnia to maintain Pplat less than or equal to 30 cmH2O."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is tidal volume and what range is recommended for lung-protective ventilation?", 
 "answer": "Tidal volume (VT) is the volume of air moved in or out per breath. Normal spontaneous VT is approximately 500 mL or 7 mL/kg IBW. For lung-protective ventilation in ARDS the ARDSNet protocol recommends 6 mL/kg IBW with a range of 4-8 mL/kg. Higher volumes cause volutrauma. IBW is used rather than actual weight because lung size correlates with height not weight. Always base VT calculations on IBW regardless of patient obesity."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "How is ideal body weight (IBW) calculated for ventilator settings?", 
 "answer": "IBW is used because lung size correlates with height and sex not actual weight. Male IBW (kg) = 50 + 2.3 x (height in inches minus 60). Female IBW (kg) = 45.5 + 2.3 x (height in inches minus 60). Example: 70-inch male IBW = 50 + 23 = 73 kg. At 6 mL/kg VT = 438 mL. Using actual body weight in obese patients would dangerously overestimate VT. Always recalculate IBW when initiating ventilation or adjusting lung-protective settings."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is PEEP and what are its primary clinical effects?", 
 "answer": "PEEP (positive end-expiratory pressure) is positive pressure maintained in the airways at end-expiration, preventing alveolar collapse between breaths. Clinical effects: recruits collapsed alveoli reducing intrapulmonary shunt, improves oxygenation and compliance, maintains FRC, prevents atelectrauma. PEEP does NOT directly reduce PaCO2 \u2014 that depends on minute ventilation. Excessive PEEP reduces venous return and cardiac output and risks overdistension. Minimum PEEP in ARDS per Berlin definition is 5 cmH2O."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What are the adverse effects of excessive PEEP?", 
 "answer": "Excessive PEEP causes: reduced venous return and decreased cardiac output (most significant hemodynamic effect), alveolar overdistension and barotrauma (pneumothorax, pneumomediastinum, subcutaneous emphysema), increased intracranial pressure by impairing jugular venous drainage, reduced urine output from decreased renal perfusion, hepatic congestion, and falsely elevated pulmonary artery wedge pressure. Monitor for hypotension, falling CO, and rising Pplat when increasing PEEP."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is plateau pressure and why is it clinically important?", 
 "answer": "Plateau pressure (Pplat) is measured during an end-inspiratory hold (0.5-2 seconds) when gas flow is zero. It reflects static alveolar distending pressure \u2014 the pressure the lung and chest wall must sustain at end-inspiration. Normal Pplat is less than 30 cmH2O. ARDSNet mandates Pplat less than or equal to 30 cmH2O to prevent VILI. Measured by performing an inspiratory pause on the ventilator. Rising Pplat with unchanged PIP suggests decreased compliance. Rising PIP with stable Pplat suggests increased resistance."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is driving pressure and why does it predict ARDS mortality?", 
 "answer": "Driving pressure (delta P) = Pplat minus PEEP. It represents transpulmonary stress per breath applied to the functional aerated lung. Target driving pressure less than 15 cmH2O. Driving pressure is more strongly associated with ARDS mortality than VT or Pplat alone because it normalizes for the size of the baby lung \u2014 the smaller the aerated lung, the higher the stress for any given VT. Reduce driving pressure by decreasing VT or by increasing PEEP to recruit more lung and improve compliance."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the difference between PIP and plateau pressure?", 
 "answer": "PIP (peak inspiratory pressure) is the highest pressure reached during inspiration, overcoming both airway resistance and elastic recoil. Pplat is measured at zero flow during an inspiratory hold, reflecting only elastic recoil. PIP minus Pplat = pressure overcoming airway resistance (Raw). Normal PIP minus Pplat is less than 10 cmH2O. Clinical interpretation: rising PIP with stable Pplat = increased resistance. Rising PIP and Pplat together = decreased compliance. Rising Pplat with unchanged PIP = decreased compliance with unchanged resistance."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is minute ventilation and how does it relate to PaCO2?", 
 "answer": "Minute ventilation (VE) = tidal volume x respiratory rate. Normal adult VE is 5-8 L/min. PaCO2 is inversely proportional to alveolar minute ventilation. Increasing VE decreases PaCO2. Decreasing VE increases PaCO2. Dead space reduces effective alveolar ventilation: VA = (VT minus VD) x RR. In ARDS permissive hypercapnia accepts PaCO2 up to 80-100 mmHg with pH above 7.20 to achieve lung-protective goals. Never sacrifice lung protection to normalize PaCO2 in ARDS."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is normal I:E ratio and when is it altered?", 
 "answer": "Normal I:E ratio is 1:2 \u2014 inspiration takes one-third and expiration two-thirds of the breathing cycle. Prolonged expiration (1:3 or 1:4) is used in obstructive disease (COPD, asthma) to allow complete exhalation and prevent auto-PEEP. Inverse ratio ventilation (IRV, 2:1 or greater) prolongs inspiration to recruit alveoli in severe ARDS \u2014 associated with auto-PEEP development. Normal inspiratory time is 0.8-1.2 seconds in adults. Prolonged I-time can impair venous return."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is auto-PEEP and how is it detected?", 
 "answer": "Auto-PEEP (intrinsic PEEP) occurs when exhalation is incomplete before the next breath begins, trapping air and creating residual end-expiratory pressure above set PEEP. Causes: obstructive disease, high respiratory rate, large tidal volumes, prolonged inspiratory time. Detection: end-expiratory hold maneuver \u2014 residual pressure above set PEEP is auto-PEEP. Flow-time waveform showing non-return to zero baseline indicates air trapping. Auto-PEEP increases work of breathing and risk of pneumothorax."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "How is auto-PEEP reduced in a mechanically ventilated patient?", 
 "answer": "Reduce auto-PEEP by: decreasing respiratory rate (most effective \u2014 more time to exhale), decreasing tidal volume (less volume to exhale), increasing inspiratory flow rate (shortens inspiration, lengthens expiration), decreasing I:E ratio (1:3 or 1:4), bronchodilator therapy (reduces airway resistance), suctioning secretions, and switching to a lower resistance ETT. Adding extrinsic PEEP up to 80% of measured auto-PEEP can reduce trigger work without worsening air trapping."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is static compliance and how is it calculated?", 
 "answer": "Static compliance (Cst) reflects the elastic properties of the lung and chest wall. Calculated as: Cst = VT divided by (Pplat minus PEEP). Normal adult Cst is 60-100 mL/cmH2O. Decreased compliance in: ARDS, pulmonary fibrosis, pulmonary edema, pneumothorax, obesity, abdominal distension, right mainstem intubation. Increased compliance in: emphysema. A falling Cst in a ventilated patient suggests worsening lung condition or new complication."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is airway resistance and how is it estimated from ventilator parameters?", 
 "answer": "Airway resistance (Raw) is estimated as: Raw = (PIP minus Pplat) divided by inspiratory flow (L/sec). Normal Raw is 0.5-2.5 cmH2O/L/sec. Elevated in bronchospasm, secretions, small or kinked ETT, biting on tube. Clinical significance: high PIP with normal Pplat = high resistance. Reduce resistance by suctioning, bronchodilators, increasing ETT size, or placing a bite block. Elevated resistance increases work of breathing and peak airway pressures."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What ventilator alarm indicates a possible pneumothorax?", 
 "answer": "Sudden high peak pressure alarm combined with decreased or absent unilateral breath sounds and hemodynamic instability (tachycardia, hypotension, falling SpO2) suggests tension pneumothorax. Additional signs include tracheal deviation away from the affected side, JVD, and absent chest rise on one side. This is a life-threatening emergency requiring immediate needle decompression (2nd intercostal space, midclavicular line) without waiting for CXR confirmation. Do not delay treatment for imaging."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What does a low pressure alarm indicate on a ventilator?", 
 "answer": "Low pressure alarm indicates loss of circuit integrity \u2014 pressure is not building as expected. Most common cause is circuit disconnection (most immediately life-threatening). Other causes: ETT cuff leak or deflation, circuit crack or hole, speaking valve left on trach, humidifier disconnection, or loose connections at wye piece. First action: immediately check connections from ventilator to patient. If patient is in distress disconnect from ventilator and manually ventilate with bag-valve mask while troubleshooting."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What does a high pressure alarm indicate on a ventilator?", 
 "answer": "High pressure alarm indicates resistance to flow or decreased compliance. Causes: patient biting on ETT, secretions or mucus plug, bronchospasm, kinked or obstructed ETT, pneumothorax, right mainstem intubation, worsening ARDS, pulmonary edema, patient-ventilator dyssynchrony, coughing. Systematic assessment: listen to breath sounds, suction if secretions present, check tube position and patency, assess for pneumothorax, administer bronchodilator if bronchospasm suspected."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is ventilator-induced lung injury (VILI) and what are its mechanisms?", 
 "answer": "VILI is lung injury caused by mechanical ventilation itself. Mechanisms: volutrauma (overdistension from excessive tidal volumes), barotrauma (excessive pressure causing air leak \u2014 pneumothorax, pneumomediastinum, subcutaneous emphysema), atelectrauma (cyclic opening and closing of unstable alveoli causing shear injury), biotrauma (release of inflammatory mediators from injured lung causing systemic inflammation). All mechanisms are reduced by lung-protective ventilation: low VT, adequate PEEP, controlled Pplat."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is permissive hypercapnia and when is it used?", 
 "answer": "Permissive hypercapnia is the intentional acceptance of elevated PaCO2 (typically up to 80-100 mmHg) to achieve lung-protective ventilation targets (Pplat less than or equal to 30 cmH2O, VT 6 mL/kg IBW). pH is generally accepted down to 7.20-7.25. Used in ARDS and severe asthma. Contraindicated in elevated intracranial pressure (CO2 causes cerebral vasodilation and raises ICP), severe pulmonary hypertension, and hemodynamically unstable patients. May require sodium bicarbonate if pH falls below 7.20."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is pressure-regulated volume control (PRVC) ventilation?", 
 "answer": "PRVC is a dual-control mode that delivers pressure-controlled breaths but automatically adjusts the pressure level breath-by-breath to achieve a clinician-set target tidal volume. It combines the decelerating flow waveform of PC (better gas distribution, lower PIP) with the volume guarantee of VC. If compliance improves, pressure decreases. If compliance worsens, pressure increases up to a set limit. Useful in ARDS and patients with changing lung mechanics. Sometimes called AutoFlow or APV depending on ventilator brand."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is airway pressure release ventilation (APRV)?", 
 "answer": "APRV maintains a prolonged high CPAP level (P-high, T-high 4-6 seconds) to recruit and stabilize alveoli, with brief pressure releases (P-low near zero, T-low 0.4-0.8 seconds) for CO2 clearance. Spontaneous breathing is allowed throughout the cycle, improving V/Q matching and reducing sedation needs. Used in moderate-severe ARDS as an open-lung approach. T-low is set so expiratory flow at release termination is 50-75% of peak expiratory flow (prevents full derecruitment). Controversial \u2014 evidence is mixed compared to ARDSNet."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is high-frequency oscillatory ventilation (HFOV)?", 
 "answer": "HFOV delivers very small tidal volumes (1-3 mL/kg, smaller than dead space) at very high frequencies (3-15 Hz, 180-900 cycles/min) using a piston or diaphragm. Mean airway pressure (mPaw) is set high to maintain lung recruitment. Gas exchange occurs via complex mechanisms: asymmetric velocity profiles, molecular diffusion, coaxial flow, pendelluft. Used in severe ARDS and neonatal RDS refractory to conventional ventilation. Clinical indicator of adequate oscillation is chest wiggle (vibration visible to mid-thigh). Evidence for adult ARDS benefit is limited after OSCILLATE and OSCAR trials."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is patient-ventilator dyssynchrony and what are its consequences?", 
 "answer": "Patient-ventilator dyssynchrony occurs when the ventilator's timing, flow, or pressure delivery does not match the patient's respiratory effort. Types: trigger dyssynchrony (delayed or missed triggers), flow dyssynchrony (flow starvation or excess), cycle dyssynchrony (early or late termination of inspiration), double triggering (breath stacking), and reverse triggering (ventilator breath triggers patient effort). Consequences: increased work of breathing, discomfort, worsening oxygenation, dynamic hyperinflation, patient self-inflicted lung injury, increased sedation requirements, prolonged ventilation."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is flow starvation and how is it identified on a waveform?", 
 "answer": "Flow starvation occurs in VC mode when the set inspiratory flow rate does not meet the patient's inspiratory demand. Identified on the pressure-time waveform as a concave (scooped) downward deflection during inspiration \u2014 the patient is pulling harder than the ventilator delivers. Treatment: increase inspiratory flow rate (from 40 to 60-80 L/min), switch to PC or PS mode which provides flow on demand, or increase sedation if the patient is fighting the ventilator. Flow starvation increases work of breathing and patient discomfort."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What are the ARDSNet lower PEEP/FiO2 table pairings?", 
 "answer": "ARDSNet lower PEEP table pairs FiO2 with minimum PEEP to maintain SpO2 88-95%: FiO2 0.30/PEEP 5, FiO2 0.40/PEEP 5-8, FiO2 0.50/PEEP 8-10, FiO2 0.60/PEEP 10, FiO2 0.70/PEEP 10-14, FiO2 0.80/PEEP 14, FiO2 0.90/PEEP 14-18, FiO2 1.0/PEEP 18-24. The higher PEEP table uses more PEEP at lower FiO2 levels. The goal is to use the lowest FiO2 that achieves target oxygenation to reduce oxygen toxicity risk."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the purpose of an end-expiratory hold maneuver?", 
 "answer": "An end-expiratory hold (expiratory pause) is performed to measure auto-PEEP (intrinsic PEEP). The ventilator occluded the expiratory port at end-expiration for 0.5-2 seconds. The pressure equilibrates across the respiratory system, and any pressure above the set PEEP level represents auto-PEEP. Requires the patient to be passive (not triggering) for accurate measurement. Auto-PEEP greater than 5 cmH2O is clinically significant and requires intervention to reduce air trapping."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the purpose of an end-inspiratory hold maneuver?", 
 "answer": "An end-inspiratory hold (inspiratory pause) is performed to measure plateau pressure (Pplat). The ventilator occludes the inspiratory port for 0.5-2 seconds at end-inspiration with no gas flow. Pressure equilibrates to reflect static alveolar pressure. Requires the patient to be passive. Pplat is used to calculate static compliance and driving pressure, and to assess VILI risk. Must be performed with the patient passive \u2014 spontaneous effort during the hold invalidates the measurement."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What ventilator settings are recommended for acute COPD exacerbation?", 
 "answer": "COPD ventilation strategy: VT 6-8 mL/kg IBW, RR 10-14 breaths/min (lower rate allows complete exhalation), I:E ratio 1:3 to 1:4, low extrinsic PEEP (3-5 cmH2O or titrate to 80% of measured auto-PEEP), FiO2 to target SpO2 88-92%, high inspiratory flow (60-80 L/min to shorten I-time). Goal is maximum expiratory time to prevent air trapping and auto-PEEP. Avoid high RR \u2014 each breath adds to dynamic hyperinflation. NIV (BiPAP) should be tried before intubation in COPD exacerbation."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is neuromuscular blockade (NMB) during mechanical ventilation?", 
 "answer": "NMBAs (neuromuscular blocking agents) eliminate all spontaneous respiratory effort and patient-ventilator dyssynchrony. Indications in ventilated patients: severe ARDS (P/F less than 150) in first 48 hours to facilitate lung-protective ventilation, refractory dyssynchrony, severe air trapping, elevated ICP requiring controlled ventilation. Monitoring: train-of-four (TOF) target 1-2 twitches out of 4. Risks: ICU-acquired weakness, corneal injury, pressure ulcers, inability to detect pain or seizures. Always use with adequate sedation and analgesia."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What are the indications for prone positioning in ARDS?", 
 "answer": "Prone positioning is indicated for moderate-severe ARDS with P/F ratio less than 150 mmHg on FiO2 greater than or equal to 0.60 and PEEP greater than or equal to 5 cmH2O. Per PROSEVA trial (2013): prone for at least 16 hours per day significantly reduced 28-day mortality. Mechanism: redistributes perfusion to better-ventilated dorsal lung regions, recruits dorsal atelectasis, improves V/Q matching. Contraindications: unstable spine, open chest/abdomen, facial/pelvic fractures, elevated ICP, hemodynamic instability refractory to vasopressors."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the recruitment maneuver and when is it used in ARDS?", 
 "answer": "Recruitment maneuvers (RM) apply a sustained high airway pressure (typically 40 cmH2O for 40 seconds, or stepwise PEEP increments) to open collapsed alveoli. Used in ARDS when oxygenation is refractory despite optimal PEEP and prone positioning. The ART trial (2017) showed stepwise RM followed by decremental PEEP titration actually increased mortality, raising questions about routine use. Current evidence does not support routine RM. May be used selectively after derecruitment events (circuit disconnection, suction). Monitor for hypotension and pneumothorax during RM."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the difference between mandatory and spontaneous breaths on a ventilator?", 
 "answer": "Mandatory breaths are fully controlled by the ventilator \u2014 the ventilator determines when the breath starts (time-triggered) or assists a patient trigger with a full set volume or pressure. Spontaneous breaths are initiated and terminated by the patient \u2014 the ventilator provides support only if pressure support is active. In AC mode all breaths are mandatory. In SIMV mandatory breaths occur at the set rate and spontaneous breaths occur above it. In PSV/CPAP all breaths are spontaneous. Classification: trigger source (patient vs time), target (pressure vs volume), cycle mechanism (flow vs time)."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the VAP prevention bundle?", 
 "answer": "Ventilator-associated pneumonia (VAP) prevention bundle: head of bed elevation 30-45 degrees (reduces aspiration), daily sedation awakening trials (SAT) combined with spontaneous breathing trials (SBT) to minimize intubation duration, oral decontamination with chlorhexidine, subglottic secretion drainage using Hi-Lo Evac ETT, hand hygiene before and after patient contact, circuit changes only when visibly soiled (not on routine schedule), cuff pressure maintenance 20-30 cmH2O. VAP prolongs ICU stay, increases mortality, and adds significant cost."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is noninvasive ventilation (NIV) and what are its indications?", 
 "answer": "NIV delivers positive pressure ventilation via mask (nasal, full-face, or total-face) without endotracheal intubation. Modes: CPAP (for OSA, cardiogenic pulmonary edema) and BiPAP (for hypercapnic respiratory failure, COPD exacerbation, OHS, neuromuscular disease). Indications: COPD exacerbation with hypercapnia (strongest evidence), cardiogenic pulmonary edema, immunocompromised patients with respiratory failure, post-extubation respiratory distress. Benefits: avoids intubation complications, preserves airway defenses, reduces VAP risk, improves patient comfort."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What are the contraindications to noninvasive ventilation?", 
 "answer": "Absolute contraindications to NIV: respiratory arrest or cardiac arrest (needs invasive airway immediately), inability to protect airway (unconscious, absent gag reflex), uncooperative or agitated patient, facial trauma or surgery preventing mask fit, active vomiting with high aspiration risk, hemodynamic instability unresponsive to vasopressors, recent upper GI surgery. Relative contraindications: excessive secretions, inability to clear secretions, morbid obesity with high aspiration risk. Failure to improve within 1-2 hours of NIV trial should prompt intubation."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What BiPAP settings are used for COPD exacerbation with hypercapnia?", 
 "answer": "Initial BiPAP settings for COPD exacerbation: IPAP 10-12 cmH2O, EPAP 4-5 cmH2O (pressure support = IPAP minus EPAP = 6-8 cmH2O), FiO2 to target SpO2 88-92%, backup rate 10-12 breaths/min. Titrate IPAP by 2 cmH2O increments to achieve VT 6-8 mL/kg and reduce PaCO2. Maximum effective IPAP is typically 20-25 cmH2O. Assess response with ABG at 1-2 hours. Goals: reduce PaCO2, increase pH above 7.35, reduce WOB, avoid intubation."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the difference between IPAP and EPAP in BiPAP?", 
 "answer": "IPAP (inspiratory positive airway pressure) is the higher pressure delivered during inspiration. EPAP (expiratory positive airway pressure) is the lower pressure maintained during expiration, equivalent to PEEP. The difference between IPAP and EPAP = pressure support level, which drives tidal volume and reduces work of breathing. EPAP keeps alveoli open and offloads expiratory muscle work. Typical IPAP range: 10-25 cmH2O. Typical EPAP range: 4-8 cmH2O. Minimum pressure support of 4-6 cmH2O is needed to overcome mask and circuit resistance."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the lung-protective ventilation strategy per ARDSNet?", 
 "answer": "ARDSNet lung-protective strategy: tidal volume 6 mL/kg IBW (may reduce to 4 mL/kg), maintain Pplat less than or equal to 30 cmH2O, PEEP titrated per PEEP/FiO2 table to maintain SpO2 88-95%, FiO2 titrated to lowest effective level, RR up to 35 breaths/min to maintain pH 7.30-7.45, accept permissive hypercapnia (pH above 7.20). This strategy (ARMA trial, 2000) reduced ARDS mortality from 40% to 31%. It remains the standard of care for ARDS ventilation."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is mean airway pressure (mPaw) and what affects it?", 
 "answer": "Mean airway pressure is the average pressure applied across the entire respiratory cycle. It is the primary determinant of oxygenation in most ventilation modes. Increased by: higher PEEP, higher PIP, longer inspiratory time, inverse I:E ratio, higher respiratory rate. Decreased by: lower PEEP, lower pressures, shorter inspiratory time. In HFOV mPaw is set directly and is the primary oxygenation control. Excessive mPaw reduces venous return and cardiac output."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the significance of a rising PaCO2 in a mechanically ventilated patient?", 
 "answer": "Rising PaCO2 in a ventilated patient indicates inadequate alveolar ventilation. Causes: decreased minute ventilation (sedation reducing respiratory drive above set rate), increased dead space (PE, overdistension, low CO), increased CO2 production (fever, sepsis, excess carbohydrate calories, shivering), ETT obstruction or circuit leak. Assessment: check VT, RR, minute ventilation, capnography waveform, circuit integrity, and patient's spontaneous effort. Increase minute ventilation by raising set RR or VT to correct hypercapnia."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the significance of a rising peak pressure with a stable plateau pressure?", 
 "answer": "Rising PIP with stable Pplat indicates increased airway resistance with unchanged lung compliance. PIP minus Pplat is the pressure overcoming resistance; if this gap widens, resistance has increased. Differential diagnosis: secretions or mucus plug (most common \u2014 suction), bronchospasm (administer bronchodilator), patient biting on ETT (bite block), kinked or partially obstructed ETT (reposition, check depth), water in circuit (drain condensate). Does not indicate worsening ARDS or new pneumothorax (both would raise Pplat)."}, 
{
 "domain": "Mechanical Ventilation", 
 "question": "What is the significance of rising plateau pressure with rising peak pressure?", 
 "answer": "Rising both PIP and Pplat together indicates decreased respiratory system compliance with unchanged resistance (PIP minus Pplat gap remains stable). Differential diagnosis: worsening ARDS or pulmonary edema (bilateral decreased compliance), new pneumothorax (unilateral decreased compliance with hemodynamic instability), right mainstem intubation (one lung ventilation), increasing auto-PEEP, abdominal distension, obesity, or pleural effusion. Evaluate with CXR, breath sound auscultation, and clinical assessment to differentiate causes."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What are the normal values for arterial blood gas (ABG)?", 
 "answer": "Normal ABG values: pH 7.35-7.45, PaCO2 35-45 mmHg, PaO2 75-100 mmHg (on room air), HCO3 22-26 mEq/L, SaO2 95-100%, Base excess (BE) -2 to +2 mEq/L. pH below 7.35 = acidemia. pH above 7.45 = alkalemia. PaCO2 above 45 = respiratory acidosis component. PaCO2 below 35 = respiratory alkalosis component. HCO3 below 22 = metabolic acidosis component. HCO3 above 26 = metabolic alkalosis component."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the systematic approach to ABG interpretation?", 
 "answer": "Step 1: Assess pH \u2014 below 7.35 = acidosis, above 7.45 = alkalosis. Step 2: Identify primary disturbance \u2014 if acidosis, is PaCO2 elevated (respiratory) or HCO3 low (metabolic)? If alkalosis, is PaCO2 low (respiratory) or HCO3 high (metabolic)? Step 3: Assess compensation \u2014 is the secondary component moving in the expected direction? Step 4: Calculate expected compensation to determine if fully compensated, partially compensated, or mixed disorder. Step 5: Assess oxygenation \u2014 is PaO2 and SaO2 adequate?"}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG pattern represents acute respiratory acidosis?", 
 "answer": "Acute respiratory acidosis: pH below 7.35 (acidemia), PaCO2 above 45 mmHg (elevated \u2014 respiratory cause), HCO3 normal 22-26 mEq/L (no metabolic compensation yet \u2014 acute). Example: pH 7.28, PaCO2 58, HCO3 25. Causes: hypoventilation from sedation/opioids, COPD exacerbation, severe asthma, pneumothorax, chest wall injury, neuromuscular disease. Acute compensation by kidneys has not had time to occur (takes 2-3 days). Acute bicarbonate rise is only 1 mEq/L per 10 mmHg rise in PaCO2."}, 

{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG pattern represents chronic respiratory acidosis?", 
 "answer": "Chronic respiratory acidosis: pH near-normal or mildly low (7.35-7.40), PaCO2 elevated above 45 mmHg, HCO3 elevated above 26 mEq/L (renal compensation). Example: pH 7.38, PaCO2 62, HCO3 36. The near-normal pH and significantly elevated HCO3 indicate renal compensation has occurred over days to weeks. Expected compensation: HCO3 rises 3.5 mEq/L per 10 mmHg rise in PaCO2. Seen in COPD patients with chronic CO2 retention. Do not treat the elevated HCO3 \u2014 it is appropriate compensation."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG pattern represents acute respiratory alkalosis?", 
 "answer": "Acute respiratory alkalosis: pH above 7.45 (alkalemia), PaCO2 below 35 mmHg (low \u2014 respiratory cause), HCO3 normal or slightly low 22-24 mEq/L (minimal acute compensation). Example: pH 7.52, PaCO2 28, HCO3 22. Causes: hyperventilation (anxiety, pain, fever, hypoxia, CNS injury, mechanical over-ventilation, pregnancy). Acute compensation: HCO3 falls 2 mEq/L per 10 mmHg fall in PaCO2. Symptoms: perioral tingling, carpopedal spasm, lightheadedness, tetany from decreased ionized calcium."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG pattern represents metabolic acidosis?", 
 "answer": "Metabolic acidosis: pH below 7.35 (acidemia), HCO3 below 22 mEq/L (low \u2014 metabolic cause), PaCO2 normal or low (respiratory compensation if acute). Example: pH 7.22, PaCO2 32, HCO3 13. Causes: diabetic ketoacidosis (DKA), lactic acidosis (shock, sepsis), renal failure, diarrhea (bicarb loss), toxic ingestions (aspirin, methanol, ethylene glycol). Respiratory compensation (Kussmaul breathing): expected PaCO2 = 1.5 x HCO3 + 8 (+/-2) (Winter's formula). Check anion gap to classify."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the anion gap and how is it calculated?", 
 "answer": "Anion gap (AG) = Na+ minus (Cl- + HCO3-). Normal AG is 8-12 mEq/L (with albumin correction: normal is approximately 12). Elevated AG greater than 12 indicates unmeasured anions (acids) in the blood. High AG metabolic acidosis causes (MUDPILES): Methanol, Uremia, DKA, Propylene glycol, Isoniazid/Iron, Lactic acidosis, Ethylene glycol, Salicylates. Normal AG (hyperchloremic) metabolic acidosis: diarrhea, RTA, saline infusion, Addison's disease, pancreatic fistula."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG pattern represents metabolic alkalosis?", 
 "answer": "Metabolic alkalosis: pH above 7.45 (alkalemia), HCO3 above 26 mEq/L (elevated \u2014 metabolic cause), PaCO2 normal or elevated (respiratory compensation). Example: pH 7.52, PaCO2 46, HCO3 36. Causes: vomiting or NG suction (HCl loss), diuretic use (volume contraction, hypokalemia), excessive bicarb administration, mineralocorticoid excess, hypokalemia (K+ shifts into cells, H+ shifts out). Respiratory compensation: PaCO2 rises 0.7 mmHg per 1 mEq/L rise in HCO3. Correction: treat underlying cause, chloride-responsive types respond to NS and KCl replacement."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is a mixed acid-base disorder?", 
 "answer": "A mixed disorder exists when compensation exceeds or falls short of the expected amount, or when the pH is normal despite abnormal PaCO2 and HCO3. Example: pH 7.40, PaCO2 60, HCO3 36 \u2014 appears compensated respiratory acidosis, but if the patient also has metabolic alkalosis from diuretics the AG or clinical context reveals the mixed picture. Always calculate expected compensation and compare to measured values. A common mixed disorder: COPD (chronic respiratory acidosis) plus diuretic use (metabolic alkalosis) \u2014 the two disorders partially cancel each other."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the oxyhemoglobin dissociation curve and what is its clinical significance?", 
 "answer": "The oxyhemoglobin dissociation curve (ODC) relates PaO2 to hemoglobin oxygen saturation (SaO2). It is S-shaped (sigmoid). The flat upper portion (PaO2 60-100 mmHg) means SaO2 changes little with large PaO2 changes \u2014 a buffer zone. The steep lower portion (PaO2 below 60 mmHg) means small PaO2 drops cause large SaO2 drops. Critical point: PaO2 60 mmHg = SaO2 approximately 90% \u2014 the threshold for O2 therapy. The curve facilitates O2 loading in the lungs and O2 unloading at tissues."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What causes a right shift of the oxyhemoglobin dissociation curve?", 
 "answer": "Right shift: decreased hemoglobin O2 affinity \u2014 O2 is released more readily to tissues (beneficial at tissue level). Causes (CADET mnemonic): CO2 increase, Acidosis (pH decrease), DPG increase (2,3-DPG), Exercise, Temperature increase (fever). The Bohr effect refers specifically to the pH and CO2 component. Right shift aids tissue O2 delivery during fever and exercise. At a given PaO2 the SaO2 will be lower with a right-shifted curve."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What causes a left shift of the oxyhemoglobin dissociation curve?", 
 "answer": "Left shift: increased hemoglobin O2 affinity \u2014 O2 is held more tightly and released less to tissues (impairs tissue O2 delivery). Causes: alkalosis (pH increase), hypothermia, decreased 2,3-DPG, fetal hemoglobin (HbF has higher affinity than adult HbA), carboxyhemoglobin (CO poisoning \u2014 CO binds hemoglobin with 200x affinity of O2 and causes left shift of remaining hemoglobin), methemoglobin. Left shift impairs O2 unloading at tissues despite normal PaO2."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the normal PaO2 and how does it change with age?", 
 "answer": "Normal PaO2 on room air (FiO2 0.21) in a young adult is 75-100 mmHg. PaO2 decreases with age due to increased V/Q mismatch and decreased elastic recoil. Estimated normal PaO2 for age: PaO2 = 104 minus (0.27 x age in years). Hypoxemia classification: mild 60-79 mmHg, moderate 40-59 mmHg, severe less than 40 mmHg. At PaO2 below 60 mmHg (SaO2 approximately 90%) supplemental oxygen is indicated. PaO2 also decreases at altitude due to lower barometric pressure."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the alveolar-arterial (A-a) gradient and what does it indicate?", 
 "answer": "The A-a gradient = PAO2 minus PaO2, where PAO2 (alveolar O2) = (FiO2 x [Pb - 47]) minus (PaCO2/0.8). Normal A-a gradient on room air: 5-15 mmHg in young adults, up to 25 mmHg in elderly (increases 1 mmHg per decade). Elevated A-a gradient indicates a gas exchange problem: V/Q mismatch (most common \u2014 PE, pneumonia, ARDS), intrapulmonary shunt (ARDS, consolidation, atelectasis), diffusion impairment (fibrosis, emphysema). Normal A-a gradient with hypoxemia = pure hypoventilation (no lung parenchymal problem)."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the P/F ratio and how is it used clinically?", 
 "answer": "P/F ratio = PaO2 divided by FiO2. Normal P/F ratio is greater than 400. Used in Berlin Definition of ARDS: mild P/F 200-300, moderate P/F 100-200, severe P/F less than 100 (all with PEEP greater than or equal to 5 cmH2O). Example: PaO2 80 on FiO2 0.60 = P/F 133 = moderate ARDS. P/F ratio is simple but does not account for PEEP level, which affects oxygenation. The oxygenation index (OI = mPaw x FiO2 x 100 / PaO2) is preferred in neonates and accounts for mean airway pressure."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is base excess and what does it indicate?", 
 "answer": "Base excess (BE) is the amount of acid or base required to return pH to 7.40 at normal PaCO2 and temperature. Normal BE is -2 to +2 mEq/L. Positive BE (above +2) = metabolic alkalosis (excess base). Negative BE (below -2, base deficit) = metabolic acidosis (deficit of base). BE is independent of respiratory component and reflects only the metabolic contribution. Standard base excess (SBE) corrects for hemoglobin and is considered more accurate. Useful for quantifying degree of metabolic disturbance."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the difference between SpO2 and SaO2?", 
 "answer": "SaO2 is directly measured arterial oxygen saturation from a blood gas co-oximeter, measuring all hemoglobin species (oxyhemoglobin, deoxyhemoglobin, carboxyhemoglobin, methemoglobin). SpO2 is estimated saturation from pulse oximetry using light absorption \u2014 it can only distinguish oxyhemoglobin from deoxyhemoglobin. SpO2 is falsely elevated in CO poisoning (reads carboxyhemoglobin as oxyhemoglobin) and inaccurate with methemoglobin (reads approximately 85% regardless of true SaO2). SpO2 is also affected by motion, poor perfusion, dark nail polish, and dark skin pigmentation."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What causes a falsely elevated SpO2 reading?", 
 "answer": "Falsely elevated SpO2: carboxyhemoglobin (CO poisoning \u2014 pulse ox reads COHgb as oxyhemoglobin, SpO2 appears normal while patient is severely hypoxic), methemoglobin (reads approximately 85% regardless of true saturation \u2014 may appear elevated if true SaO2 is lower), lipemia (high triglycerides interfere with light absorption). Always obtain co-oximetry ABG if CO poisoning or methemoglobinemia is suspected \u2014 SpO2 alone is dangerously misleading in these conditions."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the difference between hypoxemia and hypoxia?", 
 "answer": "Hypoxemia is low oxygen content in arterial blood (low PaO2 or SaO2). Hypoxia is inadequate oxygen delivery to tissues for cellular metabolism. Hypoxemia usually causes hypoxia but not always \u2014 in polycythemia, high PaO2 with normal hemoglobin provides adequate tissue O2 delivery despite marginal SaO2. Types of hypoxia: hypoxemic (low PaO2), anemic (low hemoglobin), circulatory/stagnant (low CO), histotoxic (cells cannot use O2 \u2014 cyanide poisoning). Treating only hypoxemia may not resolve tissue hypoxia if the cause is anemia or low CO."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the effect of hyperventilation on PaCO2 and pH?", 
 "answer": "Hyperventilation increases alveolar ventilation, blowing off more CO2 and decreasing PaCO2 below 35 mmHg. Decreased CO2 shifts the carbonic acid equilibrium: CO2 + H2O = H2CO3 = H+ + HCO3-. Less CO2 means less H+ produced, raising pH above 7.45 (respiratory alkalosis). Common causes: anxiety, pain, fever, mechanical over-ventilation, CNS stimulation, hypoxia (reflex hyperventilation), pregnancy (progesterone effect), hepatic encephalopathy. Treatment: address underlying cause, reduce set RR or VT if ventilator-induced, reassurance for anxiety-related."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the effect of hypoventilation on PaCO2 and pH?", 
 "answer": "Hypoventilation decreases alveolar ventilation, allowing CO2 to accumulate and raising PaCO2 above 45 mmHg. Increased CO2 increases carbonic acid and H+ production, lowering pH below 7.35 (respiratory acidosis). Causes: CNS depression (opioids, sedatives, anesthesia), neuromuscular disease (ALS, GBS, myasthenia), chest wall injury, obesity hypoventilation syndrome, COPD decompensation, upper airway obstruction. Hypoventilation also causes secondary hypoxemia (elevated CO2 displaces O2 in alveoli per the alveolar gas equation)."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG findings suggest a pulmonary embolism?", 
 "answer": "Classic PE ABG: hypoxemia (low PaO2), hypocapnia (low PaCO2 from compensatory hyperventilation), respiratory alkalosis (elevated pH), and widened A-a gradient. The widened A-a gradient distinguishes PE from pure hyperventilation (normal A-a). Mechanism: dead space ventilation (areas ventilated but not perfused), V/Q mismatch, and occasionally right-to-left shunting through a patent foramen ovale (PFO) opened by elevated right heart pressure. Note: ABG is neither sensitive nor specific for PE \u2014 diagnosis requires CT pulmonary angiography (CTPA)."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the Henderson-Hasselbalch equation and its clinical relevance?", 
 "answer": "Henderson-Hasselbalch: pH = 6.1 + log ([HCO3-] / 0.03 x PaCO2). Shows that pH depends on the ratio of HCO3 (metabolic component, regulated by kidneys) to PaCO2 (respiratory component, regulated by lungs). Clinical relevance: compensation works by adjusting the other component to restore the ratio. Example: in metabolic acidosis (low HCO3), lungs increase ventilation to lower PaCO2 and restore the ratio toward normal. The kidneys (HCO3) respond slowly (days); the lungs (PaCO2) respond quickly (minutes to hours)."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the expected respiratory compensation for metabolic acidosis?", 
 "answer": "Winter's formula calculates expected PaCO2 in metabolic acidosis: expected PaCO2 = (1.5 x HCO3) + 8 (+/- 2). If measured PaCO2 equals expected PaCO2, compensation is appropriate (simple metabolic acidosis). If measured PaCO2 is higher than expected, there is a concurrent respiratory acidosis (inadequate compensation). If measured PaCO2 is lower than expected, there is a concurrent respiratory alkalosis. Example: HCO3 = 12, expected PaCO2 = (1.5 x 12) + 8 = 26 mmHg. Measured PaCO2 = 30 = concurrent respiratory acidosis."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the significance of a pH of 7.40 with abnormal PaCO2 and HCO3?", 
 "answer": "A normal pH with abnormal PaCO2 and HCO3 suggests a mixed acid-base disorder where two processes are simultaneously present and partially canceling each other. Example: pH 7.40, PaCO2 60, HCO3 36 could appear to be fully compensated respiratory acidosis, but if HCO3 is higher than expected for chronic compensation (expected HCO3 = 24 + 3.5 x [60-40]/10 = 31), the extra elevation indicates concurrent metabolic alkalosis (e.g., from diuretics). Always calculate expected compensation to detect mixed disorders."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What is the alveolar gas equation and how is it used?", 
 "answer": "Alveolar gas equation: PAO2 = (FiO2 x [Pb - PH2O]) - (PaCO2 / RQ). Simplified: PAO2 = (FiO2 x 713) - (PaCO2 / 0.8) at sea level (Pb = 760, PH2O = 47). Used to calculate the A-a gradient (PAO2 - PaO2). Example at sea level on room air with PaCO2 40: PAO2 = (0.21 x 713) - (40/0.8) = 150 - 50 = 100 mmHg. The respiratory quotient (RQ) is typically 0.8, representing 0.8 molecules of CO2 produced per molecule of O2 consumed."}, 
{
 "domain": "ABG and Blood Gas Interpretation", 
 "question": "What ABG changes occur with carboxyhemoglobin poisoning?", 
 "answer": "CO poisoning ABG on co-oximetry: elevated COHgb level (normal less than 3%, smokers less than 10%), decreased SaO2 (true measured saturation), normal PaO2 (dissolved O2 is unaffected), normal pH initially. Standard pulse oximetry reads near-normal SpO2 (falsely reassuring). Symptoms correlate with COHgb level: 20-30% headache/nausea, 30-40% confusion, 40-60% seizures/coma, greater than 60% potentially fatal. Treatment: 100% O2 (reduces CO half-life from 5 hours to 90 minutes), hyperbaric O2 in severe cases."}, 
{
 "domain": "Airway Management", 
 "question": "What structures make up the upper airway?", 
 "answer": "Upper airway structures: nose and nasal passages (filter, warm, humidify air), mouth, pharynx (nasopharynx, oropharynx, hypopharynx), epiglottis (protects airway during swallowing), larynx (contains vocal cords and glottis), and trachea to the carina. The glottis (vocal cords and rima glottidis) is the anatomical boundary between upper and lower airways. The epiglottis lies anterior to the laryngeal inlet and folds down to cover the airway during swallowing. Obstruction at any level requires different management strategies."}, 
{
 "domain": "Airway Management", 
 "question": "What is the anatomical location of the cricothyroid membrane?", 
 "answer": "The cricothyroid membrane lies between the thyroid cartilage (above) and the cricoid cartilage (below) in the anterior midline of the neck. It is the preferred site for emergency surgical airway access \u2014 it is superficial, has no overlying major vessels, and is easily palpated as a soft depression below the thyroid cartilage notch. Width approximately 30 mm, height approximately 9 mm. Palpation landmark: move finger inferiorly from thyroid notch to the soft depression before the harder cricoid ring."}, 
{
 "domain": "Airway Management", 
 "question": "What is the carina and why is it clinically important?", 
 "answer": "The carina is the ridge at the bifurcation of the trachea into the right and left main bronchi, located at approximately the level of the sternal angle (angle of Louis), vertebral level T4-T5. Clinically important because: ETT tip should be 3-5 cm above the carina (confirmed on CXR at level of aortic knob or carina). Right mainstem intubation occurs when ETT is advanced past the carina into the right bronchus. The carina also contains the highly innervated cough receptors. Carinal suctioning stimulates vigorous cough."}, 
{
 "domain": "Airway Management", 
 "question": "What are the indications for endotracheal intubation?", 
 "answer": "Indications for ETT intubation: airway protection in unconscious patients (GCS less than or equal to 8, absent gag reflex, high aspiration risk), acute respiratory failure requiring mechanical ventilation, impending respiratory failure with excessive work of breathing, severe hypoxemia refractory to non-invasive measures, airway burns or inhalation injury with impending edema, facilitation of procedures requiring controlled ventilation, and cardiac arrest. Elective intubation is safer than emergent intubation \u2014 anticipate and act early."}, 
{
 "domain": "Airway Management", 
 "question": "What is the correct ETT size for adult males and females?", 
 "answer": "Adult male: 7.5-8.5 mm internal diameter (ID) ETT, typically 8.0 mm. Adult female: 6.5-7.5 mm ID ETT, typically 7.0-7.5 mm. Larger tubes reduce airway resistance (important for ventilator weaning) but increase risk of vocal cord and tracheal trauma. Smaller tubes may be used for difficult airways. Pediatric uncuffed ETT size (Cole formula): (age/4) + 4 mm ID. Cuffed pediatric: (age/4) + 3.5 mm. Always have one size smaller and one size larger available at intubation."}, 
{
 "domain": "Airway Management", 
 "question": "What is the correct ETT insertion depth for adult males and females?", 
 "answer": "Adult male: 21-23 cm at the lips/teeth. Adult female: 19-21 cm at the lips/teeth. Depth rule of thumb: 3 x ETT inner diameter (e.g., 8.0 mm tube = 24 cm). The ETT tip should lie 3-5 cm above the carina, at the level of the aortic arch on CXR. Too deep = right mainstem intubation (absent left breath sounds). Too shallow = ETT tip in pharynx, risk of extubation with cough. Always confirm with CXR and check for bilateral breath sounds, waveform capnography, and symmetric chest rise."}, 
{
 "domain": "Airway Management", 
 "question": "What is the gold standard for confirming endotracheal intubation?", 
 "answer": "Continuous waveform capnography (quantitative ETCO2) is the gold standard for confirming tracheal intubation. A sustained CO2 waveform (typically above 20 mmHg) over multiple breaths confirms tracheal placement. Esophageal intubation produces no sustained CO2 after 4-6 breaths. Secondary confirmation: bilateral breath sounds, symmetric chest rise, absence of gastric sounds, ETT misting, improvement in SpO2. CXR confirms ETT depth but takes time. Never rely solely on chest rise or breath sounds \u2014 capnography is mandatory."}, 
{
 "domain": "Airway Management", 
 "question": "What is the difference between the Miller and Macintosh laryngoscope blades?", 
 "answer": "Miller blade (straight): tip is placed directly under the epiglottis, lifting it to expose the glottis. Preferred for infants (long floppy epiglottis) and patients with anterior larynx. Macintosh blade (curved): tip is placed in the vallecula (space between base of tongue and epiglottis), indirectly lifting the epiglottis via the hyoepiglottic ligament. Macintosh is most commonly used in adults \u2014 provides more room for intubation and less risk of dental trauma. Most experienced intubators prefer one or the other based on training."}, 
{
 "domain": "Airway Management", 
 "question": "What is rapid sequence intubation (RSI)?", 
 "answer": "RSI is the simultaneous administration of an induction agent and a neuromuscular blocking agent (NMBA) to achieve rapid unconsciousness and paralysis for immediate intubation, minimizing aspiration risk. Steps: preoxygenation with 100% O2 for 3-5 minutes (denitrogenation), cricoid pressure (Sellick maneuver, controversial), simultaneous induction agent + NMBA, intubation immediately without bag-mask ventilation (classically). Common RSI drugs: etomidate + succinylcholine or ketamine + rocuronium. Indication: full stomach, aspiration risk, hemodynamic instability."}, 
{
 "domain": "Airway Management", 
 "question": "What is succinylcholine and when is it contraindicated?", 
 "answer": "Succinylcholine is a depolarizing NMBA with rapid onset (45-60 seconds) and ultra-short duration (6-10 minutes). Mechanism: binds and persistently activates nicotinic ACh receptors causing fasciculations then paralysis. Contraindicated in: crush injury or burns more than 24-72 hours old, denervation injuries (spinal cord injury, stroke, prolonged immobility), personal or family history of malignant hyperthermia, hyperkalemia, myopathies. Reason: upregulation of ACh receptors causes massive K+ efflux and life-threatening hyperkalemia. Use rocuronium instead."}, 
{
 "domain": "Airway Management", 
 "question": "What is rocuronium and what is its reversal agent?", 
 "answer": "Rocuronium is a non-depolarizing NMBA with rapid onset (60-90 seconds at 1.2 mg/kg for RSI dose) and intermediate duration (30-60 minutes). It is the preferred NMBA when succinylcholine is contraindicated. Mechanism: competitive antagonism at nicotinic ACh receptors. Reversed by sugammadex (Bridion) \u2014 a cyclodextrin that encapsulates rocuronium molecules. Sugammadex dose for immediate reversal: 16 mg/kg. This makes high-dose rocuronium a viable alternative to succinylcholine even for can't-intubate-can't-oxygenate scenarios (give rocuronium, intubate, if fails, reverse with sugammadex)."}, 
{
 "domain": "Airway Management", 
 "question": "What is the CICO (can't intubate can't oxygenate) scenario and how is it managed?", 
 "answer": "CICO is a life-threatening airway emergency where endotracheal intubation and oxygenation by mask have both failed. Immediate action: front-of-neck airway (FONA) \u2014 surgical or needle cricothyrotomy. Surgical cricothyrotomy: vertical skin incision, horizontal membrane incision, insert cuffed ETT or trach tube (6.0 ID). Needle cricothyrotomy: 14g angiocath through CTM, attach high-flow O2 or jet ventilator \u2014 temporizing measure only (CO2 accumulates). The ASA difficult airway algorithm mandates declaring CICO and performing surgical airway without further delay. Practice the procedure before you need it."}, 
{
 "domain": "Airway Management", 
 "question": "What is the laryngeal mask airway (LMA) and what are its limitations?", 
 "answer": "The LMA is a supraglottic airway device that sits in the hypopharynx, creating a low-pressure seal around the laryngeal inlet. It does not pass through the glottis. Uses: airway rescue when intubation has failed, anesthesia for low-risk short procedures, bridge to definitive airway. Limitations: does NOT reliably protect against aspiration (no cuff in trachea), cannot reliably deliver high positive pressures (leaks), cannot be used if mouth opening is less than 2-3 cm, and does not provide a definitive airway. The intubating LMA (ILMA/Fastrach) allows a blindly passed ETT through it."}, 
{
 "domain": "Airway Management", 
 "question": "What is the purpose of ETT cuff inflation and what is the correct cuff pressure?", 
 "answer": "ETT cuff inflation: creates a seal in the trachea to prevent aspiration of subglottic secretions and allow delivery of positive pressure ventilation without major leak. Correct cuff pressure: 20-30 cmH2O (15-22 mmHg). Below 20 cmH2O: risk of aspiration and inadequate seal. Above 30 cmH2O: tracheal capillary occlusion pressure is exceeded, causing mucosal ischemia, tracheal stenosis, tracheomalacia, or tracheoesophageal fistula with prolonged overinflation. Check cuff pressure every 8-12 hours with a manometer. Use minimal occlusive volume technique."}, 
{
 "domain": "Airway Management", 
 "question": "What are the steps to assess ETT placement after intubation?", 
 "answer": "Post-intubation assessment steps: 1) Continuous waveform capnography \u2014 sustained CO2 waveform confirms tracheal placement. 2) Auscultate bilateral breath sounds \u2014 equal and present bilaterally (absence on left = right mainstem). 3) Observe chest rise \u2014 symmetric bilateral rise. 4) Check SpO2 \u2014 should improve or maintain after intubation. 5) No gurgling over epigastrium (suggests esophageal placement). 6) Note ETT depth at teeth. 7) Obtain portable CXR \u2014 confirms depth (tip 3-5 cm above carina). Document all confirmation methods."}, 
{
 "domain": "Airway Management", 
 "question": "What is a tracheostomy and what are its indications?", 
 "answer": "A tracheostomy is a surgical opening through the anterior neck into the trachea, through which a tracheostomy tube is placed. Indications: anticipated prolonged mechanical ventilation (greater than 10-14 days), upper airway obstruction that cannot be managed with ETT, failed airway (CICO), facilitation of secretion clearance, long-term airway protection in neurologic injury. Benefits over ETT: improved patient comfort, reduced sedation needs, oral feeding potential, speech with speaking valve, reduced dead space, easier mobility."}, 
{
 "domain": "Airway Management", 
 "question": "What should be done if a tracheostomy tube becomes dislodged within the first 7 days?", 
 "answer": "In the first 5-7 days post-creation, the tracheostomy tract is not yet established \u2014 a dislodged tube can close rapidly and blind reinsertion risks creating a false passage anterior to the trachea. Action: call surgeon/ENT immediately, attempt oral or nasal bag-mask ventilation if the patient can be ventilated via the upper airway. Do NOT blindly force the tube back in. After 7-10 days, a mature stoma can be reinserted with direct visualization or using a suction catheter as a guide. A mature tracheostomy is generally safe to reinsert at bedside."}, 
{
 "domain": "Airway Management", 
 "question": "What is the Passy-Muir Valve (PMV) and what are the requirements for its use?", 
 "answer": "The PMV is a one-way speaking valve placed on the tracheostomy tube hub. On inspiration, the valve opens and air enters through the trach. On expiration, the valve closes and air is redirected upward through the vocal cords to the nose and mouth, enabling speech and improving swallowing. Absolute requirement: the tracheostomy cuff MUST be fully deflated before using a PMV \u2014 if the cuff is inflated the patient cannot exhale (no exit for expiratory flow), causing suffocation. Also requires adequate airway around the deflated trach tube for expiratory flow."}, 
{
 "domain": "Airway Management", 
 "question": "What is the difference between oral and nasotracheal intubation?", 
 "answer": "Oral intubation: direct laryngoscopy with blade inserted through mouth, ETT passes through vocal cords orally. Faster, more secure, preferred for emergency intubation and RSI. Easier to use larger ETT. Disadvantages: dental trauma risk, patient biting, less comfortable for long-term. Nasotracheal intubation: ETT passed through nostril, through nasopharynx, through vocal cords. Indicated when oral access is limited (jaw fracture, trismus). Blind nasal intubation possible in breathing patients. Disadvantages: contraindicated in facial fractures, smaller ETT size, risk of nasal necrosis, epistaxis, sinusitis."}, 
{
 "domain": "Airway Management", 
 "question": "What is the Sellick maneuver (cricoid pressure) and is it still recommended?", 
 "answer": "Sellick maneuver applies firm pressure (10 N awake, 30 N after loss of consciousness) to the cricoid cartilage, compressing the esophagus between the cricoid ring and cervical vertebra to theoretically prevent passive regurgitation during RSI. Originally a standard RSI component. Current evidence is conflicting: poorly applied cricoid pressure may worsen laryngoscopic view, it does not prevent active vomiting, and correct force is difficult to achieve. The 2015 ILCOR guidelines and ASA difficult airway algorithm consider it optional. Most experienced providers use a modified or omit it. Release if it worsens laryngoscopy."}, 
{
 "domain": "Airway Management", 
 "question": "What is video laryngoscopy and what are its advantages?", 
 "answer": "Video laryngoscopy (VL) uses a camera embedded in a laryngoscope blade that transmits a magnified view to an external screen. Blades include standard geometry (GlideScope Direct, McGrath Direct) and hyperangulated (GlideScope Standard, C-MAC D-Blade). Advantages: improved glottic view (especially for anterior airways), reduced force needed, ability to teach and share view, useful for predicted difficult airways. Disadvantages: requires training with stylet and ETT navigation, may be difficult with secretions or blood obscuring lens, and does not replace skill with direct laryngoscopy. Video laryngoscopy is now first-line in many institutions."}, 
{
 "domain": "Airway Management", 
 "question": "What is the Mallampati classification and what does it predict?", 
 "answer": "Mallampati classification assesses anticipated difficulty of laryngoscopy based on oral structures visible with mouth maximally open and tongue protruded without phonation. Class I: soft palate, uvula, fauces, and pillars visible \u2014 easy laryngoscopy. Class II: soft palate, uvula, fauces visible. Class III: soft palate and base of uvula visible. Class IV: soft palate not visible \u2014 predicted difficult laryngoscopy. Combined with other predictors (3-3-2 rule, neck mobility, mouth opening, thyromental distance) for comprehensive airway assessment. Sensitivity and specificity for difficult intubation are moderate individually; best used as part of a multiparameter assessment."}, 
{
 "domain": "Airway Management", 
 "question": "What is subglottic suctioning and how does it prevent VAP?", 
 "answer": "Subglottic suctioning removes secretions that pool above the ETT cuff in the subglottic space before they micro-aspirate around the cuff into the lower airway. Performed using ETT with a dorsal lumen (Hi-Lo Evac, Microcuff) connected to continuous or intermittent suction (-20 to -30 mmHg). Multiple meta-analyses show subglottic suctioning ETTs reduce VAP incidence by 50% and delay onset. Use continuous suction at low pressure or intermittent every 1-2 hours. Drain subglottic secretions before repositioning, transport, or cuff deflation procedures."}, 
{
 "domain": "Airway Management", 
 "question": "What suctioning technique minimizes hypoxia during ETT suctioning?", 
 "answer": "Closed in-line suctioning with pre-oxygenation is the preferred technique. Steps: hyperoxgenate to FiO2 1.0 for 30-60 seconds before suctioning, use closed in-line suction catheter (maintains PEEP and ventilation during procedure), suction duration no more than 10-15 seconds per pass, apply suction only while withdrawing catheter (not on insertion), return to previous FiO2 after. Closed suctioning prevents PEEP loss, maintains oxygenation, and reduces contamination risk vs open suctioning. Maximum suction pressure for adults: -100 to -150 mmHg."}, 
{
 "domain": "Pharmacology", 
 "question": "What is albuterol and how does it work?", 
 "answer": "Albuterol (salbutamol) is a short-acting beta-2 adrenergic agonist (SABA). Mechanism: selectively binds beta-2 receptors in bronchial smooth muscle, activating adenylyl cyclase, increasing cAMP, causing bronchial smooth muscle relaxation and bronchodilation. Onset 5-15 minutes, peak 30-60 minutes, duration 4-6 hours. Delivered via MDI, DPI, or SVN. Indicated for acute bronchospasm (asthma, COPD exacerbation, bronchospasm). Side effects: tremor, tachycardia, hypokalemia (at high doses), palpitations, anxiety. Most common initial treatment for acute airway obstruction."}, 
{
 "domain": "Pharmacology", 
 "question": "What is the difference between SABA, LABA, SAMA, and LAMA?", 
 "answer": "SABA (short-acting beta-2 agonist): albuterol, levalbuterol. Onset fast, duration 4-6 hours. Used for acute bronchospasm rescue. LABA (long-acting beta-2 agonist): salmeterol, formoterol, arformoterol. Duration 12+ hours. Used for maintenance, NOT rescue. SAMA (short-acting muscarinic antagonist): ipratropium. Duration 4-6 hours. Used for acute COPD. LAMA (long-acting muscarinic antagonist): tiotropium (Spiriva), umeclidinium. Duration 24 hours. First-line maintenance for COPD. Combination therapy (SABA + SAMA for acute COPD, LABA + LAMA or LABA + ICS for maintenance) is often superior to either alone."}, 
{
 "domain": "Pharmacology", 
 "question": "What is ipratropium (Atrovent) and what are its uses?", 
 "answer": "Ipratropium is a short-acting muscarinic antagonist (SAMA/anticholinergic). Mechanism: blocks muscarinic ACh receptors in airway smooth muscle, reducing bronchoconstriction and secretion production. Duration 4-6 hours, onset 15-30 minutes (slower than albuterol). Used in COPD exacerbation (combined with albuterol in DuoNeb), acute severe asthma not responding to albuterol alone, and as maintenance in mild COPD. Less cardiac stimulation than beta-agonists. Side effects: dry mouth, urinary retention, blurred vision, constipation, glaucoma exacerbation (avoid spraying in eyes)."}, 
{
 "domain": "Pharmacology", 
 "question": "What is tiotropium (Spiriva) and how does it differ from ipratropium?", 
 "answer": "Tiotropium is a long-acting muscarinic antagonist (LAMA). Duration 24 hours (once-daily dosing). Delivered via HandiHaler DPI or Respimat inhaler. Mechanism: kinetically selective \u2014 dissociates slowly from M3 receptors (bronchial) and faster from M2 receptors (cardiac), providing sustained bronchodilation with less tachycardia than non-selective agents. Indicated as first-line maintenance for COPD (reduces exacerbations, improves FEV1 and quality of life). Not for acute bronchospasm. Side effects similar to ipratropium. UPLIFT trial confirmed reduction in COPD exacerbation frequency."}, 
{
 "domain": "Pharmacology", 
 "question": "What are inhaled corticosteroids (ICS) and what are their indications?", 
 "answer": "Inhaled corticosteroids (ICS): fluticasone (Flovent), budesonide (Pulmicort), beclomethasone (QVAR), mometasone (Asmanex), ciclesonide (Alvesco). Mechanism: reduce airway inflammation, decrease mucus production, reduce eosinophilic infiltration. Indicated for persistent asthma (all severities), COPD with frequent exacerbations (combined with LABA). NOT bronchodilators \u2014 do not provide acute relief. Must be used regularly. Side effect: oral candidiasis and dysphonia \u2014 instruct patient to rinse mouth and gargle with water after each use. Use spacer to reduce oropharyngeal deposition."}, 
{
 "domain": "Pharmacology", 
 "question": "What is racemic epinephrine and when is it used?", 
 "answer": "Racemic epinephrine (2.25% solution, 0.5 mL in 2.5 mL NS via SVN) is an alpha and beta adrenergic agonist. Alpha effect: mucosal vasoconstriction reducing subglottic and supraglottic edema. Beta effect: some bronchodilation. Used for: post-extubation stridor (reduces laryngeal edema), croup (viral laryngotracheobronchitis \u2014 reduces subglottic edema), epiglottitis as adjunct. Effects last approximately 2 hours with rebound edema risk (patient must be monitored at least 2-3 hours after treatment). Not indicated for bronchospasm (use albuterol instead)."}, 
{
 "domain": "Pharmacology", 
 "question": "What is heliox and what is its mechanism of benefit?", 
 "answer": "Heliox is a mixture of helium and oxygen (typically 70:30 or 80:20). Helium is much less dense than nitrogen (0.164 g/L vs 1.25 g/L), making the gas mixture significantly less dense than air. In turbulent airflow (upper airway obstruction, large airway stenosis), resistance is proportional to gas density (Poiseuille's law for turbulent flow). Lower density converts turbulent to laminar flow, dramatically reducing airway resistance and work of breathing. Most effective for upper airway obstruction (croup, post-extubation stridor, tracheal stenosis). Less effective for small airway obstruction (asthma) where flow is already laminar. FiO2 is limited by helium concentration."}, 
{
 "domain": "Pharmacology", 
 "question": "What is N-acetylcysteine (NAC/Mucomyst) and how does it work?", 
 "answer": "NAC is a mucolytic agent that breaks disulfide bonds (-S-S-) linking mucus glycoproteins, reducing sputum viscosity and promoting clearance. Delivered via SVN (10% or 20% solution, 3-5 mL). Also used orally/IV as antidote for acetaminophen (Tylenol) overdose \u2014 replenishes glutathione preventing hepatotoxicity. Indication as mucolytic: cystic fibrosis, chronic bronchitis with thick tenacious secretions. Note: may cause bronchospasm \u2014 often given with albuterol pretreatment. Odor of rotten eggs from sulfur content. Dornase alfa (DNase/Pulmozyme) is preferred over NAC in CF."}, 
{
 "domain": "Pharmacology", 
 "question": "What is dornase alfa (Pulmozyme) and who is it indicated for?", 
 "answer": "Dornase alfa (Pulmozyme) is a recombinant human DNase enzyme. Mechanism: cleaves extracellular DNA released from neutrophils into CF airways \u2014 this DNA contributes significantly to sputum viscosity. By breaking DNA strands, dornase alfa dramatically reduces sputum viscosity and improves airway clearance. Indicated specifically for cystic fibrosis (patients 5 years and older). Delivered via jet nebulizer (not ultrasonic \u2014 may denature the protein), 2.5 mg daily or twice daily. Improves FEV1 and reduces exacerbation frequency in CF. NOT indicated for non-CF bronchiectasis or other causes of thick secretions."}, 
{
 "domain": "Pharmacology", 
 "question": "What is methylene blue and when is it used?", 
 "answer": "Methylene blue is the treatment for methemoglobinemia. Mechanism: acts as an electron carrier, reducing methemoglobin (Fe3+) back to functional hemoglobin (Fe2+) via the NADPH-methemoglobin reductase pathway. Dose: 1-2 mg/kg IV over 5 minutes, repeat in 1 hour if needed. Methemoglobin causes: dapsone, benzocaine, prilocaine, nitrites, nitrates, aniline dyes. MetHgb cannot carry oxygen \u2014 pulse oximetry reads falsely approximately 85% regardless of true saturation. Contraindicated if G6PD deficiency (lack NADPH), where exchange transfusion may be needed instead."}, 
{
 "domain": "Pharmacology", 
 "question": "What is the treatment for heparin overdose?", 
 "answer": "Protamine sulfate reverses heparin anticoagulation. Mechanism: protamine (positively charged) binds heparin (negatively charged) forming a stable inactive complex. Dosing: 1 mg protamine neutralizes approximately 100 units of heparin. Adverse effects: hypotension, bradycardia, anaphylactoid reactions (especially in patients previously exposed \u2014 fish allergy, vasectomy). Give slowly IV over 10 minutes to minimize adverse reactions. Protamine does not reverse low-molecular-weight heparin (LMWH) reliably and does not reverse direct oral anticoagulants (DOACs). Vitamin K reverses warfarin (takes 6-24 hours for full effect)."}, 
{
 "domain": "Pharmacology", 
 "question": "What is surfactant replacement therapy and when is it used?", 
 "answer": "Exogenous surfactant (beractant/Survanta, calfactant/Infasurf, poractant/Curosurf) replaces endogenous surfactant deficient in premature lungs. Administered intratracheally via ETT using a catheter or instillation. Indications: premature infants (less than 32-34 weeks) with RDS (primary indication), meconium aspiration syndrome (secondary \u2014 surfactant inactivated), ARDS (off-label, limited evidence in adults). Effect: rapidly improves compliance and oxygenation, reduces FiO2 and ventilator requirements, decreases mortality and BPD in preterm RDS. Give as early as possible (within hours of birth in RDS). May require repeat doses."}, 
{
 "domain": "Pharmacology", 
 "question": "What are the side effects of beta-2 agonist bronchodilators?", 
 "answer": "Beta-2 agonist side effects result from beta receptor stimulation. Pulmonary: bronchodilation (desired effect), potential paradoxical bronchospasm (rare). Cardiovascular: tachycardia, palpitations, hypertension, arrhythmias (especially at high doses or IV administration). Metabolic: hypokalemia (K+ shifts into cells via Na/K-ATPase stimulation), hyperglycemia. Neuromuscular: tremor, restlessness, anxiety, insomnia. Hypokalemia is dose-dependent and clinically significant in patients on diuretics or with cardiac disease. Monitor K+ and heart rate during continuous or high-frequency nebulization."}, 
{
 "domain": "Pharmacology", 
 "question": "What is cromolyn sodium and how is it used?", 
 "answer": "Cromolyn sodium (Intal) is a mast cell stabilizer. Mechanism: stabilizes mast cell membranes, preventing degranulation and release of histamine, leukotrienes, and other inflammatory mediators in response to allergen exposure or exercise. It has NO bronchodilating properties whatsoever. Indicated for prophylaxis only: exercise-induced bronchospasm (EIB) \u2014 use 15-20 minutes before exercise, allergic asthma maintenance. Must be used regularly. Onset of prophylactic effect takes weeks of regular use. Never use for acute bronchospasm. Largely replaced by ICS in current guidelines but remains an option for mild persistent asthma."}, 
{
 "domain": "Pharmacology", 
 "question": "What are leukotriene receptor antagonists (LTRAs) and when are they used?", 
 "answer": "LTRAs (montelukast/Singulair, zafirlukast/Accolate) block cysteinyl leukotriene receptors, reducing airway inflammation, mucus secretion, and bronchoconstriction. Leukotrienes are inflammatory mediators derived from arachidonic acid \u2014 potent bronchoconstrictors. Used for: mild persistent asthma (alternative or add-on to ICS), allergic rhinitis, aspirin-exacerbated respiratory disease (AERD/Samter triad). Oral once daily administration improves adherence. Less effective than ICS for asthma but useful as add-on therapy. Montelukast has black box warning for neuropsychiatric effects (mood changes, suicidality)."}, 
{
 "domain": "Pharmacology", 
 "question": "What is theophylline and what are the risks of toxicity?", 
 "answer": "Theophylline is a methylxanthine bronchodilator. Mechanism: inhibits phosphodiesterase (increases cAMP causing bronchial smooth muscle relaxation) and antagonizes adenosine receptors. Narrow therapeutic window: 10-20 mcg/mL (therapeutic), above 20 mcg/mL causes toxicity. Toxicity signs: nausea/vomiting, tachycardia, tremors, seizures, arrhythmias (at levels above 30 mcg/mL). Interactions: ciprofloxacin, erythromycin, cimetidine increase theophylline levels. Smoking decreases levels. Now rarely used due to narrow therapeutic index and availability of safer alternatives (LABA, LAMA). Still used in some COPD patients with limited access to inhaled therapies."}, 
{
 "domain": "Pharmacology", 
 "question": "What is the mechanism and use of systemic corticosteroids in respiratory disease?", 
 "answer": "Systemic corticosteroids (methylprednisolone IV, prednisone PO) reduce airway inflammation by inhibiting phospholipase A2 (reducing arachidonic acid metabolites), decreasing inflammatory cell migration, reducing cytokine production, and potentiating beta-2 agonist response. Indications: acute asthma exacerbation unresponsive to bronchodilators, acute COPD exacerbation, ARDS (early moderate doses), aspiration pneumonitis, severe community-acquired pneumonia (select cases). Onset 4-6 hours. Side effects of prolonged use: hyperglycemia, hypertension, osteoporosis, adrenal suppression, immunosuppression, psychosis, GI ulcers. Short courses (5-7 days) for exacerbations have minimal systemic effects."}, 
{
 "domain": "Pharmacology", 
 "question": "What is magnesium sulfate and when is it used in respiratory emergencies?", 
 "answer": "Magnesium sulfate IV (2 g over 20 minutes) is used as adjunct therapy in severe acute asthma not responding to maximal bronchodilator and steroid therapy. Mechanism: magnesium is a calcium antagonist \u2014 blocks calcium-mediated smooth muscle contraction, causing bronchial smooth muscle relaxation. Also inhibits mast cell degranulation. Evidence: reduces hospital admissions in severe acute asthma (MAGPIE-type trials). Use: severe exacerbation with FEV1 less than 25% predicted or life-threatening features after initial treatment failure. Caution in renal failure (magnesium clearance reduced). Monitor deep tendon reflexes (loss indicates toxicity level approaching)."}, 
{
 "domain": "Pharmacology", 
 "question": "What is the correct MDI technique to maximize drug delivery?", 
 "answer": "Correct MDI technique: shake inhaler vigorously for 5-10 seconds, attach spacer if available, exhale fully to FRC, place mouthpiece in mouth with good seal, begin slow deep inhalation, actuate (fire) the MDI at the START of inhalation, continue slow deep breath (3-5 seconds) to TLC, remove inhaler, hold breath for 5-10 seconds to allow aerosol deposition, exhale slowly. Wait 1 minute between puffs if multiple doses needed. Prime new or unused inhalers before use (2-4 test sprays into air). Most common error: actuating before beginning to inhale."}, 
{
 "domain": "Pharmacology", 
 "question": "What is the advantage of a dry powder inhaler (DPI) over an MDI?", 
 "answer": "DPI advantages: no propellant required (environmentally friendly, no cold freon sensation), no coordination required between actuation and inhalation (device is breath-actuated), no spacer needed, more portable and discrete. DPI disadvantages: requires FAST forceful inhalation (opposite of MDI technique) to disaggregate powder \u2014 minimum inspiratory flow 30-60 L/min depending on device, ineffective for patients in acute severe exacerbation who cannot generate adequate flow, moisture degrades powder (cannot store in bathroom), higher oropharyngeal deposition if technique is incorrect. Devices: Diskus, Turbuhaler, Ellipta, Breezhaler, Aerolizer."}, 
{
 "domain": "Pharmacology", 
 "question": "What is a small-volume nebulizer (SVN) and what are optimal settings?", 
 "answer": "An SVN (small-volume nebulizer, jet nebulizer) uses compressed gas flow to create an aerosol from liquid medication. Optimal settings: driving gas flow 6-8 L/min (produces particles 2-5 micron MMAD for lower airway deposition), fill volume 3-5 mL (ensures adequate nebulization time), treatment duration 10-15 minutes or until sputtering indicates completion. Place patient upright. Tap nebulizer cup occasionally to use residual medication. Contaminated nebulizers are a significant infection source \u2014 clean and dry between treatments. In mechanically ventilated patients, place SVN 6 inches from the patient wye in the inspiratory limb."}, 
{
 "domain": "Pharmacology", 
 "question": "What medications require mouth rinsing after inhalation?", 
 "answer": "Inhaled corticosteroids (ICS) require rinsing the mouth and gargling with water immediately after each use. Reason: ICS deposits in the oropharynx can cause oral candidiasis (thrush \u2014 white plaques, sore mouth) and dysphonia (hoarse voice from steroid effect on laryngeal mucosa). Rinse and spit \u2014 do not swallow rinse water. Using a spacer with MDI-ICS reduces oropharyngeal deposition by 80% and decreases candidiasis risk. If candidiasis develops treat with nystatin swish-and-swallow or clotrimazole troches. Other medications (bronchodilators, NAC) do not specifically require mouth rinsing."}, 
{
 "domain": "Pharmacology", 
 "question": "What is monobactam or macrolide antibiotic therapy in respiratory infections?", 
 "answer": "Azithromycin (Zithromax) is a macrolide antibiotic with both antimicrobial and anti-inflammatory properties. In respiratory therapy context: used in COPD patients with frequent exacerbations \u2014 daily azithromycin reduces exacerbation frequency (AZALEA, COLUMBUS trials) through immunomodulatory effects. Also used in community-acquired pneumonia (atypical coverage: Mycoplasma, Chlamydophila, Legionella) and as part of CF prophylaxis protocols. Risks: cardiac QT prolongation, macrolide resistance emergence, hearing loss with prolonged use. Also used in diffuse panbronchiolitis and non-CF bronchiectasis."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What are the normal vital signs for an adult?", 
 "answer": "Normal adult vital signs: respiratory rate 12-20 breaths/min, heart rate 60-100 beats/min, blood pressure 90-120 / 60-80 mmHg, temperature 36.1-37.2 degrees C (97-99 degrees F), SpO2 95-100% on room air, pain 0/10. Tachypnea (RR greater than 20) is an early and sensitive sign of respiratory distress. Tachycardia often accompanies respiratory distress, hypoxia, or anxiety. Fever increases oxygen consumption and CO2 production, worsening respiratory work. Always assess vital signs trend, not just single values."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What are the breath sounds associated with common respiratory conditions?", 
 "answer": "Normal: vesicular sounds (soft, low-pitched inspiratory greater than expiratory) in peripheral lung; bronchial sounds (loud, high-pitched, expiratory greater than inspiratory) over trachea. Abnormal: crackles (rales) \u2014 fine (fibrosis, early pulmonary edema) or coarse (pneumonia, pulmonary edema, secretions); wheezes \u2014 continuous, musical, high-pitched expiratory (bronchospasm, COPD, asthma); rhonchi \u2014 low-pitched, snoring inspiratory and expiratory (secretions in large airways, clears with cough); stridor \u2014 high-pitched inspiratory (upper airway obstruction); pleural friction rub \u2014 grating leather sound with breathing (pleuritis)."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What does dullness to percussion indicate?", 
 "answer": "Percussion produces sounds related to the density of underlying tissue. Resonant (hollow): normal air-filled lung. Dull (thud-like): consolidation (pneumonia \u2014 fluid/cells replace air), pleural effusion (fluid above lung), hemothorax, atelectasis, lung mass or tumor, empyema. Hyperresonant (booming): air trapping (emphysema), pneumothorax (air in pleural space). Tympanic (drum-like): over hollow organs (stomach). Dullness with decreased or absent breath sounds suggests pleural effusion. Dullness with bronchial breath sounds and egophony suggests consolidation (pneumonia)."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What are the signs and symptoms of respiratory distress?", 
 "answer": "Signs of respiratory distress: tachypnea (RR greater than 20), use of accessory muscles (sternocleidomastoid, scalenes, intercostal, abdominal), nasal flaring, retractions (suprasternal, intercostal, subcostal), paradoxical breathing (chest moves in while abdomen moves out \u2014 diaphragm fatigue), cyanosis (late sign), diaphoresis (increased work, sympathetic activation), tachycardia, altered mental status (CO2 retention or hypoxia). Intercostal and substernal retractions are particularly significant in infants. Grunting in neonates indicates significant respiratory distress (self-generated PEEP)."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is the difference between central and peripheral cyanosis?", 
 "answer": "Central cyanosis: bluish discoloration of the mucous membranes, lips, and tongue \u2014 indicates systemic hypoxemia (deoxygenated hemoglobin greater than 5 g/dL). Occurs in severe respiratory failure, cardiac right-to-left shunt, severe anemia (unusual), methemoglobinemia. Peripheral cyanosis: bluish discoloration of fingers and toes only \u2014 indicates poor peripheral perfusion (vasoconstriction, low cardiac output, cold exposure) with normal or near-normal central oxygenation. Cold hands with pink lips = peripheral only. Blue lips = central. Central cyanosis is the more concerning finding."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is Kussmaul breathing and what does it indicate?", 
 "answer": "Kussmaul breathing is deep, rapid, labored breathing \u2014 a compensatory response to severe metabolic acidosis. The respiratory center is stimulated by low pH to increase alveolar ventilation, blowing off CO2 to raise pH. Classic in DKA (diabetic ketoacidosis) and severe renal acidosis. The pattern: large tidal volumes with rapid rate, often described as \"air hunger.\" Different from Cheyne-Stokes (crescendo-decrescendo with apneic pauses) and Biot's respiration (irregular with apneic episodes \u2014 severe CNS damage). Kussmaul breathing is a sign of serious metabolic derangement requiring urgent treatment."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is Cheyne-Stokes respiration and what causes it?", 
 "answer": "Cheyne-Stokes respiration is a cyclic breathing pattern: crescendo (increasing depth) followed by decrescendo (decreasing depth) respiratory effort, followed by a period of apnea (10-60 seconds), then repeating. Caused by delayed chemoreceptor feedback loop \u2014 when PaCO2 rises during apnea, the respiratory center overcorrects (hyperventilation), driving PaCO2 too low, causing apnea again. Causes: CHF (prolonged circulation time delays feedback), CNS lesions (stroke, TBI, brain tumor), high altitude, uremia, opioids. Common in sleeping patients with severe CHF. Treat underlying cause; BiPAP may stabilize breathing."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What does JVD (jugular venous distension) indicate?", 
 "answer": "JVD indicates elevated central venous pressure (CVP greater than 8 mmHg). The internal jugular vein reflects right atrial pressure \u2014 distension with patient at 45 degrees (more than 3-4 cm above sternal angle) is abnormal. Causes: right heart failure (cor pulmonale, RV infarction), cardiac tamponade, tension pneumothorax, constrictive pericarditis, superior vena cava syndrome, fluid overload, severe pulmonary hypertension. JVD combined with hypotension and muffled heart sounds = cardiac tamponade (Beck's triad). JVD with tracheal deviation = tension pneumothorax. JVD in a mechanically ventilated patient may reflect high PEEP."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is pulsus paradoxus and what conditions cause it?", 
 "answer": "Pulsus paradoxus is an exaggerated decrease in systolic blood pressure (greater than 10 mmHg) during normal inspiration. Mechanism: during inspiration, right heart fills more (increased venous return), the interventricular septum shifts left, compressing the left ventricle and reducing LV output. Normally the drop is less than 10 mmHg. Exaggerated in: cardiac tamponade (most classic \u2014 pericardial fluid compresses heart, worsening during inspiration), severe asthma (large pleural pressure swings), severe COPD, constrictive pericarditis, hypovolemia. Measured with sphygmomanometer during slow breathing."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What are the chest X-ray findings in common respiratory conditions?", 
 "answer": "Pneumonia: lobar or segmental consolidation (opacification with air bronchograms). Pulmonary edema: bilateral perihilar bat-wing opacities, Kerley B lines, pleural effusions, cardiomegaly. ARDS: bilateral diffuse patchy infiltrates (ground glass), no cardiomegaly. Pneumothorax: hyperlucent hemithorax with absent lung markings, visible pleural line, tracheal deviation (tension). Atelectasis: linear or lobar opacity with volume loss, tracheal/fissure shift toward the lesion. Pleural effusion: blunting of costophrenic angle, meniscus sign, opacification of lower hemithorax."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is the significance of air bronchograms on chest X-ray?", 
 "answer": "Air bronchograms appear when air-filled bronchi are visible against a background of opacified (airless) lung parenchyma. The bronchi contain air while the surrounding alveoli are filled with fluid or cells. Seen in: pneumonia (alveoli filled with exudate), pulmonary edema, ARDS, lung contusion, atelectasis (rare). Air bronchograms indicate patent airways in an otherwise opacified area \u2014 suggesting the consolidation is airspace disease rather than pleural effusion or pleural-based mass (which would not show air bronchograms). Important in distinguishing pneumonia from atelectasis on imaging."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is clubbing of the digits and what respiratory conditions cause it?", 
 "answer": "Digital clubbing: loss of the normal 15-degree angle between the nail and dorsum of the distal phalanx, increased nail bed sponginess, and bulbous swelling of fingertips. Pathogenesis incompletely understood \u2014 possibly related to platelet-derived growth factor or hypoxia-induced vasodilation. Respiratory causes: lung cancer (most important to rule out in new clubbing), idiopathic pulmonary fibrosis, cystic fibrosis, bronchiectasis, lung abscess, empyema, mesothelioma, chronic hypoxia. NOT associated with COPD or asthma (important distinction). Non-respiratory causes: congenital cyanotic heart disease, inflammatory bowel disease, liver cirrhosis."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is the significance of pursed-lip breathing in COPD?", 
 "answer": "Pursed-lip breathing is a compensatory technique in COPD patients: exhaling through partially closed lips creates back-pressure that maintains airway patency during expiration, preventing dynamic airway collapse. This extends the time for complete exhalation, reduces air trapping and auto-PEEP, slows respiratory rate, and increases tidal volume. COPD patients often discover this technique spontaneously. It can be taught formally as pulmonary rehabilitation. The back-pressure is approximately equivalent to 2-4 cmH2O extrinsic PEEP. Effective for exercise-related dyspnea in COPD patients."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is the significance of barrel chest in respiratory assessment?", 
 "answer": "Barrel chest is an increased anteroposterior (AP) diameter of the thorax, approaching a 1:1 AP-to-lateral ratio (normal is approximately 1:2). Caused by chronic air trapping and hyperinflation \u2014 the chest becomes fixed in an inspiratory position. Associated with emphysema and COPD. The diaphragm is flattened (hyperinflated lungs push it down), reducing its mechanical advantage and increasing the work of breathing. Percussion reveals hyperresonance; breath sounds are diminished. Barrel chest combined with hyperresonance and decreased breath sounds strongly suggests emphysema."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What are the sputum characteristics associated with different respiratory conditions?", 
 "answer": "Sputum characteristics: clear/white mucoid = normal or viral infection; yellow/green purulent = bacterial infection (neutrophils, bacteria); rust-colored = pneumococcal pneumonia (Streptococcus pneumoniae) \u2014 blood-tinged with fibrin; currant jelly (thick, bloody) = Klebsiella pneumoniae; pink frothy = pulmonary edema (plasma proteins and RBCs); foul-smelling dark = lung abscess or bronchiectasis; blood-tinged (hemoptysis) = TB, bronchiectasis, lung cancer, PE. Quantity: scant (normal), moderate (chronic bronchitis greater than 25 mL/day), copious (greater than 100 mL/day in bronchiectasis)."}, 
{
 "domain": "Patient Assessment & Diagnostics", 
 "question": "What is the clinical significance of increased work of breathing (WOB)?", 
 "answer": "Increased work of breathing (WOB) is the effort required to overcome respiratory system resistance and elastance. Normally WOB consumes less than 5% of total O2 consumption. In respiratory failure, WOB can consume 25-50% \u2014 stealing O2 from other organs and producing excess CO2. Clinical signs: use of accessory muscles, retractions, tachypnea, diaphoresis, paradoxical breathing, inability to speak in full sentences. Untreated high WOB leads to respiratory muscle fatigue and respiratory failure. Mechanical ventilation takes over WOB when patient cannot sustain it. PSV reduces WOB during weaning."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What are the lobes of the right and left lungs?", 
 "answer": "Right lung: 3 lobes \u2014 upper lobe (RUL), middle lobe (RML), lower lobe (RLL). Separated by the oblique fissure (RLL from RML and RUL) and the horizontal fissure (RUL from RML). Right lung is larger (3 lobes) and shorter (liver beneath). Left lung: 2 lobes \u2014 upper lobe (LUL) with lingula (homologue of RML) and lower lobe (LLL). Separated by the oblique fissure only. Left lung has cardiac notch to accommodate the heart. Right mainstem bronchus is more vertical, wider, and shorter \u2014 explains why aspirated material and ETTs preferentially enter the right lung."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What are the conducting airways and their function?", 
 "answer": "Conducting airways (anatomical dead space, approximately 150 mL): trachea (10-12 cm long, 1.5-2.5 cm diameter), 2 main bronchi, lobar bronchi (3 right, 2 left), segmental bronchi (10 right, 8-10 left), subsegmental bronchi, bronchioles, terminal bronchioles. Function: warm, filter, and humidify inspired air; conduct air to gas exchange units; mucociliary clearance of particles. No gas exchange occurs here. Respiratory bronchioles and alveolar ducts begin the transitional and respiratory zones where gas exchange occurs. Loss of conducting airway function (bypass via trach) requires artificial humidification."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is the alveolus and what cell types does it contain?", 
 "answer": "The alveolus is the terminal gas exchange unit of the lung. Approximately 300 million alveoli in both lungs, total surface area approximately 70 m2. Cell types: Type I pneumocytes (squamous, flat, 95% of alveolar surface) \u2014 structural lining, gas diffusion occurs across them. Type II pneumocytes (granular, cuboidal, 5% of surface but 60% of cells) \u2014 produce surfactant, serve as progenitor cells for Type I repair. Alveolar macrophages \u2014 phagocytose particles and pathogens. Endothelial cells line adjacent capillaries. The blood-gas barrier (Type I cell + basement membrane + endothelium) is approximately 0.2-0.5 microns thick."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is surfactant, what produces it, and what is its function?", 
 "answer": "Pulmonary surfactant is a lipoprotein mixture (predominantly dipalmitoylphosphatidylcholine \u2014 DPPC \u2014 plus surfactant proteins SP-A, SP-B, SP-C, SP-D). Produced by Type II pneumocytes. Function: reduces alveolar surface tension (La Place's law: P = 2T/r \u2014 without surfactant, smaller alveoli would collapse and larger would overdistend). Surfactant stabilizes alveoli across different sizes, preventing atelectasis and increasing compliance. Deficiency causes: prematurity (RDS), ARDS (surfactant inactivated by edema proteins), near-drowning. Full surfactant production begins approximately 35 weeks gestation."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is the pulmonary circulation and how does it differ from systemic circulation?", 
 "answer": "Pulmonary circulation: low-pressure, low-resistance, high-compliance system. Normal pulmonary artery pressure: 25/10 mmHg (mean approximately 15 mmHg). Right heart pumps deoxygenated blood to pulmonary capillaries for oxygenation, then to left heart. Systemic circulation: high-pressure, high-resistance. Normal aortic pressure: 120/80 mmHg. Key difference: pulmonary vessels dilate with high O2 (opposite of systemic vessels). Hypoxic pulmonary vasoconstriction (HPV) is a protective reflex \u2014 directs blood away from poorly ventilated lung regions to better-ventilated ones, optimizing V/Q matching."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is the cardiac cycle and what phases does it include?", 
 "answer": "Cardiac cycle: Diastole (filling phase) \u2014 ventricles relax, AV valves (mitral, tricuspid) open, blood fills from atria. Systole (ejection phase) \u2014 ventricles contract, AV valves close (S1 sound), semilunar valves (aortic, pulmonic) open, blood ejected, then semilunar valves close (S2 sound). Preload = end-diastolic volume (filling volume, determined by venous return). Afterload = resistance the ventricle must overcome to eject (SVR for LV, PVR for RV). Cardiac output = HR x stroke volume. Stroke volume determined by preload, afterload, and contractility (Frank-Starling law)."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is V/Q matching and what happens when it is abnormal?", 
 "answer": "V/Q ratio (ventilation-perfusion ratio) is the ratio of alveolar ventilation to pulmonary blood flow. Normal mean V/Q = 0.8 (VA approximately 4 L/min, Q approximately 5 L/min). V/Q mismatch: low V/Q (shunt-like) \u2014 alveolus perfused but poorly ventilated (consolidation, atelectasis) \u2014 unoxygenated blood returns to systemic circulation, causing hypoxemia that responds poorly to supplemental O2. High V/Q (dead space) \u2014 alveolus ventilated but poorly perfused (PE) \u2014 wasted ventilation, hypoxemia, hypocapnia. Hypoxic pulmonary vasoconstriction minimizes low V/Q effects by redirecting blood to ventilated areas."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is the difference between anatomical dead space and physiological dead space?", 
 "answer": "Anatomical dead space: volume of conducting airways that do not participate in gas exchange (trachea to terminal bronchioles). Approximately 150 mL or 1 mL/lb IBW in adults. Physiological dead space: all lung regions that are ventilated but do not participate in gas exchange \u2014 includes anatomical dead space PLUS alveolar dead space (perfused but gas exchange impaired). Normal VD/VT ratio is approximately 0.3 (30% of each breath is wasted). Elevated VD/VT in: PE (low blood flow), ARDS (alveolar flooding), high PEEP (overdistension reducing capillary blood flow), severe emphysema."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is the role of the diaphragm in breathing?", 
 "answer": "The diaphragm is the primary muscle of inspiration, responsible for approximately 70-80% of tidal volume during quiet breathing. Innervated by the phrenic nerve (C3, C4, C5 \u2014 \"C3, 4, 5 keeps the diaphragm alive\"). During inspiration, the diaphragm contracts and descends, increasing thoracic volume and decreasing intrathoracic pressure, drawing air into lungs. Expiration is normally passive (elastic recoil). Diaphragm dysfunction: phrenic nerve injury (cardiac surgery, trauma), COPD (flattening reduces mechanical advantage), neuromuscular disease (GBS, ALS). Diaphragm assessment: phrenic nerve stimulation, ultrasound (measures excursion)."}, 
{
 "domain": "Cardiopulmonary Anatomy & Physiology", 
 "question": "What is the normal anatomical dead space and how does it change with disease?", 
 "answer": "Normal anatomical dead space is approximately 150 mL in adults (1 mL/lb IBW). It includes all conducting airways from nose/mouth to terminal bronchioles. Dead space increases with: age, large tidal volumes, high PEEP (overdistension of alveoli), bronchodilation, PEEP-induced decrease in Q. Dead space decreases with: bronchoconstriction, intubation (bypasses pharynx \u2014 reduces dead space approximately 50-75 mL). Clinical significance: with high VD/VT, patients must generate high minute ventilation to maintain PaCO2 \u2014 increases work of breathing and may be unsustainable without ventilatory support."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is FVC and what does it measure?", 
 "answer": "FVC (forced vital capacity) is the total volume of air forcefully exhaled from a maximal inhalation (TLC) to a maximal exhalation (RV). Normal adults: approximately 3-5 L (varies with age, sex, height, ethnicity). Decreased FVC in: obstructive disease (air trapping prevents full exhalation), restrictive disease (reduced lung volume), neuromuscular weakness. Normal FVC with decreased FEV1/FVC ratio = obstruction. Decreased FVC with normal or elevated FEV1/FVC ratio = restriction. FVC is measured by spirometry. ATS/ERS acceptability criteria: smooth curve with no hesitation, cough, or early termination."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is FEV1 and what is its significance?", 
 "answer": "FEV1 (forced expiratory volume in 1 second) is the volume of air exhaled in the first second of a forceful maximal exhalation from TLC. The most important spirometric measure. Reflects large and medium airway patency. Reduced in: obstructive disease (most sensitive marker), restrictive disease (proportionally reduced with FVC). FEV1/FVC ratio less than 0.70 defines obstruction. FEV1 percent predicted used for severity staging in COPD (GOLD): GOLD 1 greater than or equal to 80%, GOLD 2 50-79%, GOLD 3 30-49%, GOLD 4 less than 30%. FEV1 also used to define severity of restriction and to assess surgical risk."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is the FEV1/FVC ratio and how is it used?", 
 "answer": "The FEV1/FVC ratio (Tiffeneau-Pinelli index) expresses the fraction of FVC exhaled in the first second. Normal is greater than 0.70 (70%). Below 0.70 = obstructive pattern (COPD, asthma \u2014 air flows slowly). Normal or elevated in restriction (both FEV1 and FVC are proportionally reduced, so ratio is maintained or increased). GOLD criteria for COPD: post-bronchodilator FEV1/FVC less than 0.70 confirms persistent airflow obstruction. LLN (lower limit of normal) approach: uses 95th percentile cutoff adjusted for age, sex, height \u2014 preferred in elderly (ratio naturally declines with age, making 0.70 cutoff over-diagnose COPD)."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What spirometric pattern indicates a restrictive lung defect?", 
 "answer": "Restrictive pattern on spirometry: FVC decreased (less than 80% predicted), FEV1 decreased proportionally, FEV1/FVC ratio normal or elevated (typically greater than 0.70). The lungs are small and stiff \u2014 cannot be fully filled. Definitive confirmation of restriction requires measurement of TLC (less than 80% predicted) by body plethysmography or gas dilution. Spirometry alone cannot diagnose restriction \u2014 a reduced FVC with normal FEV1/FVC may reflect restriction or severe obstruction with air trapping. Causes: pulmonary fibrosis, obesity, pregnancy, kyphoscoliosis, neuromuscular disease, pleural disease."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is the significance of a post-bronchodilator spirometry test?", 
 "answer": "Post-bronchodilator spirometry is performed 15-20 minutes after administering 400 mcg albuterol (or 160 mcg ipratropium) to assess reversibility of airflow obstruction. Significant bronchodilator response (reversibility): FEV1 or FVC increases greater than or equal to 12% AND greater than or equal to 200 mL from baseline. Present in asthma (typically fully reversible), partially reversible in COPD. GOLD defines COPD as persistent obstruction (FEV1/FVC less than 0.70 post-bronchodilator). Complete reversibility to normal FEV1/FVC with bronchodilator suggests asthma rather than COPD. Combined obstruction with reversibility may indicate asthma-COPD overlap (ACO)."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What lung volumes cannot be measured by spirometry?", 
 "answer": "Spirometry measures volumes involving maximal inhalation and exhalation: VT, IRV, ERV, IC, VC, FVC, FEV1. Spirometry CANNOT measure volumes containing residual volume (RV): RV itself (approximately 1.2 L, air remaining after maximal exhalation), FRC (ERV + RV, approximately 2.5 L), TLC (VC + RV, approximately 6 L). These require either body plethysmography (gold standard, measures all lung volumes including trapped gas), helium dilution, or nitrogen washout. RV and FRC are increased in emphysema (air trapping) and decreased in fibrosis."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is DLCO and what conditions decrease it?", 
 "answer": "DLCO (diffusing capacity for carbon monoxide) measures the ability of the alveolar-capillary membrane to transfer gas. CO is used because it binds hemoglobin with high affinity (never reaches equilibrium in one breath). Single-breath technique: inhale 0.3% CO + 10% helium (for lung volume), hold 10 seconds, exhale, measure CO transferred. Normal DLCO: approximately 25-30 mL/min/mmHg. Decreased in: emphysema (destroyed alveolar surface), pulmonary fibrosis (thickened membrane), pulmonary hypertension (reduced capillary blood volume), anemia (less Hgb to bind CO), PE (reduced perfusion). Increased in: polycythemia, pulmonary hemorrhage, left-to-right shunt."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is the flow-volume loop and what patterns indicate obstruction vs restriction?", 
 "answer": "The flow-volume loop plots expiratory flow (y-axis) against volume (x-axis) for forced exhalation and inhalation. Normal: triangular expiratory loop with peak at approximately 75% of exhalation, smooth curve. Obstructive pattern: scooped-out (concave) expiratory limb \u2014 reduced flows at low lung volumes, normal or increased peak flow initially but early termination. Restrictive pattern: narrow, tall loop \u2014 reduced volumes but proportionally maintained flows. Fixed upper airway obstruction: flattening of BOTH inspiratory and expiratory limbs (plateau) \u2014 tracheal stenosis, tracheomalacia. Variable extrathoracic obstruction (vocal cord): flattened inspiratory limb only. Variable intrathoracic obstruction: flattened expiratory limb only."}, 
{
 "domain": "Pulmonary Function Testing", 
 "question": "What is the maximum voluntary ventilation (MVV) and its clinical significance?", 
 "answer": "MVV is the maximum volume of air breathed in and out with maximal effort over 12-15 seconds (reported as L/min). Normal is approximately 170 L/min or approximately 35-40 x FEV1. MVV reflects overall respiratory muscle strength, coordination, and airway patency. Decreased in: COPD (obstructed flow), neuromuscular disease (weak muscles), poor effort. MVV is used to assess surgical risk \u2014 MVV less than 50% predicted or less than 50 L/min indicates high risk for post-operative respiratory complications. Also used with FEV1 and DLCO in pre-operative evaluation for lung resection."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the Berlin Definition of ARDS?", 
 "answer": "Berlin Definition of ARDS (2012): all four criteria must be met: 1) Timing \u2014 acute onset within 1 week of known clinical insult or new/worsening respiratory symptoms. 2) Chest imaging \u2014 bilateral opacities on CXR or CT not fully explained by effusions, atelectasis, or nodules. 3) Origin of edema \u2014 respiratory failure NOT fully explained by cardiac failure or fluid overload (requires objective assessment \u2014 echo if no risk factor present, PAWP less than 18 mmHg). 4) Oxygenation impairment \u2014 P/F ratio less than 300 with PEEP or CPAP greater than or equal to 5 cmH2O. Severity: mild P/F 200-300, moderate P/F 100-200, severe P/F less than 100."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What are the direct and indirect causes of ARDS?", 
 "answer": "Direct (pulmonary) ARDS causes \u2014 injury occurs directly to lung parenchyma: pneumonia (most common direct cause), aspiration of gastric contents, pulmonary contusion, inhalation injury/toxic gas, near-drowning, reperfusion injury post-lung transplant. Indirect (extrapulmonary) ARDS causes \u2014 lung injured via systemic inflammatory response: sepsis (most common overall cause of ARDS), major trauma, multiple transfusions (TRALI), burns, pancreatitis, drug overdose, fat embolism, cardiopulmonary bypass. Mortality is similar between direct and indirect, but lung mechanics may differ \u2014 direct ARDS tends to have more consolidated lung, indirect ARDS more diffuse edema."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the pathophysiology of ARDS?", 
 "answer": "ARDS pathophysiology \u2014 three overlapping phases: Exudative phase (0-7 days): massive alveolar-capillary barrier disruption, neutrophil influx, protein-rich edema floods alveoli, surfactant inactivation, widespread atelectasis, severe V/Q mismatch, refractory hypoxemia. Proliferative phase (7-21 days): Type II pneumocyte proliferation, early fibrosis, organization of exudate. Fibrotic phase (greater than 21 days): progressive fibrosis in some patients, reduced compliance, worsening hypercapnia. Not all patients progress through all phases. Mortality is 30-45% for severe ARDS."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the ARMA trial and what did it establish?", 
 "answer": "The ARMA trial (NEJM 2000) was the landmark ARDSNet randomized controlled trial comparing low tidal volume (6 mL/kg IBW, Pplat less than or equal to 30) vs conventional volume (12 mL/kg IBW, Pplat less than or equal to 50). Low-volume strategy reduced 28-day mortality from 40% to 31% (absolute risk reduction 9%). The trial was stopped early due to benefit. Established 6 mL/kg IBW and Pplat less than or equal to 30 cmH2O as the standard of care for ARDS ventilation. Despite early criticism (comparison to artificially high volumes), lung-protective ventilation is the most evidence-based intervention in ARDS management."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the PROSEVA trial and what did it prove about prone positioning?", 
 "answer": "PROSEVA trial (NEJM 2013) enrolled severe ARDS patients (P/F less than 150 on PEEP greater than or equal to 5, FiO2 greater than or equal to 0.60) randomized to prone (greater than or equal to 16 hours/day) vs supine ventilation. Prone group: dramatic 28-day mortality reduction from 32.8% to 16.0% (NNT approximately 6). 90-day mortality also significantly reduced. No increase in complications (decubitus ulcers, unplanned extubations). Established prone positioning for greater than or equal to 16 hours/day as standard of care for moderate-severe ARDS. Prerequisite: experienced nursing team and prone protocol to prevent complications."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What are the complications of prone positioning?", 
 "answer": "Prone positioning complications: facial edema and pressure injuries (eyes, nose, chin, forehead, ears \u2014 use foam padding, gel cushions), unplanned ETT/line/tube displacement (secure all lines before proning), pressure ulcers (chest, knees, pelvis \u2014 use specialized foam mattresses), hemodynamic instability during turning, brachial plexus injury (arm positioning), ophthalmic injuries (corneal abrasion, central retinal artery occlusion \u2014 tape eyes closed, avoid direct pressure), selective right bronchial compression if patient position improperly placed. Requires minimum 4-5 staff for safe proning procedure."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the role of PEEP in ARDS management?", 
 "answer": "PEEP in ARDS: prevents end-expiratory alveolar collapse (atelectrauma), recruits collapsed alveoli improving oxygenation, reduces intrapulmonary shunt, improves compliance (if on the recruiting portion of the pressure-volume curve), and allows lower FiO2 (reducing O2 toxicity risk). PEEP titration: use ARDSNet PEEP/FiO2 table OR individualized PEEP titration (decremental PEEP trial after recruitment, transpulmonary pressure monitoring with esophageal balloon). Risks of excessive PEEP: overdistension, pneumothorax, reduced CO. There is no universally best PEEP \u2014 optimal PEEP balances recruitment vs overdistension for each patient."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the significance of fluid management in ARDS?", 
 "answer": "Conservative fluid management in ARDS reduces pulmonary edema, improves oxygenation, and decreases duration of mechanical ventilation. FACTT trial (ARDS Network): conservative fluid strategy (CVP target 4-8 mmHg) vs liberal strategy \u2014 conservative group had significantly more ventilator-free days and ICU-free days with no increase in organ failure. Goal: avoid positive fluid balance after initial resuscitation. Use diuretics to achieve euvolemia or slight negative balance once hemodynamics are stable. Avoid fluid overload \u2014 each liter of extra fluid worsens alveolar edema in ARDS. Monitor fluid balance daily."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is sepsis-induced ARDS and what are the management priorities?", 
 "answer": "Sepsis is the most common cause of ARDS (indirect mechanism \u2014 systemic inflammation damages alveolar-capillary barrier). Management priorities: 1) Treat underlying sepsis (early antibiotics, source control, fluid resuscitation per Surviving Sepsis guidelines). 2) Lung-protective ventilation (6 mL/kg IBW, Pplat less than or equal to 30, PEEP per table). 3) Prone positioning if P/F less than 150. 4) Conservative fluid strategy after initial resuscitation. 5) Avoid high FiO2 (target SpO2 88-95%). 6) NMB for first 48 hours if refractory dyssynchrony or severe hypoxemia. Steroids: low-dose corticosteroids for septic shock with inadequate vasopressor response."}, 
{
 "domain": "ARDS & Critical Care", 
 "question": "What is the oxygenation index (OI) and when is it used?", 
 "answer": "Oxygenation index (OI) = (mPaw x FiO2 x 100) / PaO2. Unlike P/F ratio, OI accounts for mean airway pressure, making it more comprehensive for assessing oxygenation failure. Predominantly used in neonatal and pediatric ARDS to guide therapy escalation. OI greater than or equal to 16 = moderate neonatal respiratory failure. OI greater than or equal to 25 = consider HFOV or iNO. OI greater than or equal to 40 = consider ECMO. The P/F ratio is used for adult Berlin ARDS criteria; OI is preferred in neonatal/pediatric practice. Both reflect severity of oxygenation failure relative to ventilatory support required."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What are the standard criteria for considering a spontaneous breathing trial (SBT)?", 
 "answer": "SBT readiness criteria: FiO2 less than or equal to 0.40-0.50, PEEP less than or equal to 5-8 cmH2O, hemodynamic stability (absent or low-dose vasopressors, no active myocardial ischemia), adequate mental status (follows simple commands, GCS greater than or equal to 8, able to protect airway), acceptable ABG (pH greater than or equal to 7.25), absence of excessive secretions, resolving or stable underlying reason for intubation. Spontaneous respiratory effort present. Conduct daily screening using all criteria. When criteria met, proceed to SBT rather than delaying further optimization. Earlier SBT reduces VAP risk and ICU length of stay."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What is the RSBI (rapid shallow breathing index) and how is it used?", 
 "answer": "RSBI (Yang-Tobin index) = respiratory rate (f) divided by tidal volume in liters (VT). Measured during 1-2 minutes of spontaneous breathing on minimal or no support. RSBI less than 105 breaths/min/L predicts successful extubation. RSBI greater than 105 predicts weaning failure (rapid shallow breathing indicates respiratory muscle fatigue or excessive load). Sensitivity approximately 97%, specificity approximately 64% for extubation success. RSBI is a screening tool \u2014 not the sole criterion for extubation. Clinical assessment, cough strength, secretion burden, and mental status must also be evaluated."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "How is an SBT conducted and what are the methods?", 
 "answer": "SBT methods: T-piece trial \u2014 patient disconnected from ventilator, breathes spontaneously on T-piece with humidified oxygen for 30-120 minutes. Low-level PSV trial \u2014 patient remains on ventilator with PSV 5-8 cmH2O over PEEP 5 cmH2O for 30-120 minutes. Both methods have equivalent evidence for predicting extubation success. T-piece provides no support; PSV overcomes ETT resistance. Duration: 30 minutes is as effective as 2 hours for most patients. Monitor for SBT failure signs. If the patient tolerates SBT, proceed to extubation assessment. Failed SBTs require return to comfortable ventilator support and addressing reversible causes."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What are the signs of spontaneous breathing trial failure?", 
 "answer": "SBT failure signs: respiratory rate greater than 35 breaths/min or less than 8 breaths/min, SpO2 less than 90% or PaO2 less than 60 mmHg, tidal volume less than 4 mL/kg IBW, RSBI greater than 105, heart rate greater than 140 beats/min or increase/decrease greater than 20%, systolic BP greater than 180 or less than 90 mmHg, increased accessory muscle use, paradoxical abdominal motion, diaphoresis, agitation or altered mental status, complaints of severe dyspnea. Any one sign present = terminate SBT, return to comfortable ventilator settings, investigate and address cause."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What is the cuff leak test and what does it predict?", 
 "answer": "Cuff leak test predicts risk of post-extubation stridor from laryngeal/subglottic edema. Technique: deflate ETT cuff, occlude ETT end, patient attempts to breathe around the ETT. Presence of audible leak = adequate space around ETT = lower stridor risk. Absence of leak = potential subglottic edema = higher stridor risk. Quantitative method: compare VT with cuff inflated vs deflated (leak volume less than 110 mL or less than 10-12% of VT = high risk). Consider pre-extubation methylprednisolone (20 mg IV every 4 hours x 4 doses starting 12 hours before extubation) for high-risk patients. Sensitivity approximately 66%, specificity approximately 99%."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What is the SAT (spontaneous awakening trial) and why is it important?", 
 "answer": "SAT (spontaneous awakening trial) is the daily cessation of sedative infusions to allow the patient to awaken and assess neurological status. Combined SAT + SBT protocol (Awakening and Breathing Coordination, ABC trial): daily SAT followed immediately by SBT if SAT passed. The ABC trial showed: SAT + SBT reduced ventilator days by approximately 3 days, reduced ICU stay by approximately 4 days, and reduced 1-year mortality by 14% compared to SBT alone without SAT. SAT failure: agitation requiring restart of sedation, respiratory distress, or SpO2 below 88%. Light sedation (RASS -2 to 0) is associated with better outcomes than deep sedation."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What are the criteria for proceeding to extubation after a successful SBT?", 
 "answer": "After successful SBT, extubation criteria: adequate mental status to protect airway (follows commands, GCS greater than or equal to 8), adequate cough strength (peak cough flow greater than 60 L/min correlates with successful extubation), manageable secretion burden (can handle secretions without risk of aspiration), acceptable ABG or SpO2 without signs of distress during SBT, hemodynamic stability, and absence of planned return to OR. Assess upper airway obstruction risk (cuff leak test if prolonged intubation). Extubation to high-flow nasal cannula or NIV as preventive measure reduces post-extubation respiratory failure in high-risk patients."}, 
{
 "domain": "Weaning & Extubation", 
 "question": "What is post-extubation stridor and how is it managed?", 
 "answer": "Post-extubation stridor is high-pitched inspiratory (or biphasic) noise from laryngeal edema or subglottic stenosis after ETT removal. Incidence approximately 5-15% after prolonged intubation. Immediate management: racemic epinephrine nebulization (0.5 mL of 2.25% in 2.5 mL NS) \u2014 reduces edema via alpha-mediated vasoconstriction, onset 10-30 minutes, duration 2 hours (watch for rebound). Heliox reduces work of breathing during stridor (less dense gas). IV corticosteroids (dexamethasone) for sustained edema. Reintubation if stridor worsens, SpO2 falls, or work of breathing increases substantially. Prevention: pre-extubation corticosteroids if cuff leak test fails."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What are the normal respiratory rates by age?", 
 "answer": "Normal respiratory rates by age: newborns (0-1 month) 40-60 breaths/min, infants (1-12 months) 30-60 breaths/min, toddlers (1-3 years) 24-40 breaths/min, preschool (3-6 years) 22-34 breaths/min, school age (6-12 years) 18-30 breaths/min, adolescents (12-18 years) 12-20 breaths/min, adults 12-20 breaths/min. Infants and children have higher RR due to higher metabolic rates and smaller VT. Tachypnea in neonates (RR greater than 60) suggests respiratory distress, infection, or cardiac disease. Bradypnea in neonates is concerning \u2014 suggests CNS depression or apnea."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is neonatal respiratory distress syndrome (RDS)?", 
 "answer": "Neonatal RDS (hyaline membrane disease) is caused by surfactant deficiency in premature infants. Surfactant production is immature before 35 weeks; most severe before 28 weeks. Pathophysiology: insufficient surfactant \u2192 increased alveolar surface tension \u2192 alveolar collapse \u2192 decreased compliance \u2192 increased work of breathing \u2192 hypoxemia, hypercapnia \u2192 respiratory failure. Clinical features: tachypnea, grunting, nasal flaring, retractions beginning within 4-6 hours of birth, ground glass opacities on CXR with air bronchograms. Treatment: antenatal corticosteroids (betamethasone), exogenous surfactant, CPAP, mechanical ventilation if severe."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is the Apgar score and how is it interpreted?", 
 "answer": "Apgar score assesses neonatal well-being at 1 and 5 minutes after birth. Five components (0-2 each): Appearance (color \u2014 0=blue/pale, 1=body pink/extremities blue, 2=all pink), Pulse (0=absent, 1=less than 100, 2=greater than or equal to 100), Grimace/reflex (0=none, 1=grimace, 2=cry/cough), Activity/muscle tone (0=limp, 1=some flexion, 2=active), Respiration (0=absent, 1=slow/irregular, 2=strong cry). Scoring: 7-10 = normal, 4-6 = moderate depression (may need stimulation/O2), 0-3 = severe depression (immediate resuscitation). Score at 5 minutes predicts neonatal outcome better than 1-minute score."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What are the key steps of neonatal resuscitation (NRP)?", 
 "answer": "NRP initial steps (first 60 seconds \u2014 \"golden minute\"): Warm (dry, stimulate, position), Clear airway if needed (suction mouth/nose if secretions), Stimulate (dry vigorously). Assess: breathing and heart rate. If HR less than 100 or inadequate breathing: begin positive pressure ventilation (PPV) with 21% O2 (room air) at 40-60 breaths/min. Evaluate chest rise \u2014 if no rise, adjust mask seal, reposition, increase pressure. If HR less than 60 despite 30 seconds of PPV: begin chest compressions (3:1 ratio), intubate ETT, epinephrine IV if persistent bradycardia. SpO2 targets: 1 min 60-65%, 5 min 80-85%, 10 min 85-95%."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is meconium aspiration syndrome (MAS)?", 
 "answer": "MAS occurs when meconium (fetal stool, green-black viscous) is aspirated into the airways before, during, or after delivery \u2014 typically in term/post-term infants in response to fetal distress/hypoxia. Pathophysiology: chemical pneumonitis, airway obstruction (ball-valve effect causing air trapping), surfactant inactivation, PPHN (persistent pulmonary hypertension of newborn). CXR: coarse irregular opacities, hyperinflation, possible pneumothorax. Management: immediate suctioning of non-vigorous infant at perineum (mouth/oropharynx before shoulders delivered if meconium-stained fluid \u2014 no longer routine in vigorous infants), CPAP or mechanical ventilation, surfactant, iNO for PPHN, ECMO if refractory."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is bronchopulmonary dysplasia (BPD)?", 
 "answer": "BPD (chronic lung disease of prematurity) is a chronic respiratory disease in premature infants resulting from injury to the developing lung. Causes: oxygen toxicity, volutrauma/barotrauma from mechanical ventilation, infection, inflammation in combination with immature lung development. Definition: supplemental O2 requirement at 36 weeks postmenstrual age (or 28 days of life). Severity: mild (room air at 36 weeks), moderate (less than 30% O2), severe (greater than or equal to 30% O2 or PPV). Prevention: antenatal steroids, gentle ventilation, early surfactant, caffeine therapy, avoidance of hyperoxia. Long-term: increased risk of asthma, developmental delay."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is transient tachypnea of the newborn (TTN)?", 
 "answer": "TTN (wet lung disease) is caused by delayed resorption of fetal lung fluid after birth. Most common in term infants born by cesarean section (no labor compression of chest to expel lung fluid), large for gestational age, or diabetic mothers. Presents in first hours of life with tachypnea (RR 60-120), mild cyanosis, grunting. CXR: diffuse bilateral haziness, perihilar streaking, fluid in fissures, pleural effusions. Self-limiting \u2014 typically resolves in 24-72 hours. Management: supplemental O2 (usually FiO2 less than 0.40), CPAP if needed, supportive care. Key: differentiate from RDS (preterm) and pneumonia (fever, culture abnormalities)."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is persistent pulmonary hypertension of the newborn (PPHN)?", 
 "answer": "PPHN is failure of normal postnatal decrease in pulmonary vascular resistance (PVR), causing right-to-left shunting through the patent ductus arteriosus (PDA) and foramen ovale, resulting in severe hypoxemia refractory to supplemental O2. Causes: MAS, birth asphyxia, sepsis, idiopathic. Diagnosis: preductal (right hand) SpO2 significantly higher than postductal (left hand or feet) SpO2 \u2014 difference greater than 5-10% suggests right-to-left ductal shunting. Treatment: optimize ventilation (alkalosis/normal PaCO2 reduces PVR), inhaled nitric oxide (iNO \u2014 selective pulmonary vasodilator), sildenafil, milrinone, ECMO for refractory cases. Avoid hypothermia, pain, and acidosis (worsen PVR)."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is inhaled nitric oxide (iNO) and what are its indications?", 
 "answer": "Inhaled nitric oxide is a selective pulmonary vasodilator delivered in parts per million (ppm) blended with ventilated gas. Mechanism: NO diffuses into vascular smooth muscle, activates guanylyl cyclase, increases cGMP, causing relaxation of pulmonary arterioles. Only vasodilates ventilated lung regions (selective \u2014 does not cause systemic hypotension unlike IV vasodilators). Indications: PPHN in term/near-term neonates (FDA-approved), hypoxic respiratory failure with pulmonary hypertension, post-cardiac surgery RV failure. Starting dose: 20 ppm. Weaning: reduce by 5 ppm increments. Complications: methemoglobin formation (monitor), rebound pulmonary hypertension on abrupt discontinuation."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is the difference between ETT and tracheostomy tube size in pediatric patients?", 
 "answer": "Pediatric ETT size (uncuffed): (age in years / 4) + 4 mm ID. Cuffed ETT: (age/4) + 3.5 mm. ETT depth (oral, cm at lip) = (age/2) + 12 OR 3 x ETT size. Tracheostomy tube sizing: uses different system \u2014 Shiley pediatric sizes (3.0-5.5) and neonatal sizes (3.0-4.5). Tracheostomy tubes are shorter and differently angled than adult tubes to fit pediatric airway geometry. Uncuffed tracheostomy tubes preferred in small children to reduce subglottic injury. Cuffed tracheostomy tubes used in children requiring high ventilatory pressures. Always verify tube size against patient weight and age using validated charts."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What are the signs of respiratory distress in a neonate?", 
 "answer": "Neonatal respiratory distress signs: tachypnea (RR greater than 60), grunting (expiratory sound \u2014 infant creating own PEEP by closing glottis against exhalation to prevent alveolar collapse), nasal flaring (reduces nasopharyngeal resistance), retractions (suprasternal, intercostal, subcostal, xiphoid \u2014 indicate increased work of breathing), cyanosis (central \u2014 lips, mucous membranes), poor feeding, apnea, decreased activity. Grunting is a particularly important sign in neonates. Silverman-Anderson retraction score quantifies respiratory distress in neonates (0-10 scale). Score greater than 4 = significant distress requiring intervention."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is caffeine therapy in premature infants and why is it used?", 
 "answer": "Caffeine citrate is a methylxanthine stimulant used in premature infants for: apnea of prematurity (AOP \u2014 primary indication), facilitation of extubation (reduces apnea post-extubation), and possible reduction of BPD. Mechanism: adenosine receptor antagonism stimulates respiratory center, increases diaphragm contractility, improves CO2 sensitivity. CAP trial: caffeine significantly reduced BPD, improved neurodevelopmental outcomes at 18 months. Loading dose: 20 mg/kg caffeine base IV; maintenance 5-10 mg/kg/day. Therapeutic level: 5-25 mcg/mL. Side effects: tachycardia, irritability, feeding intolerance. First-line treatment for AOP \u2014 largely replaced theophylline."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is the oxygen saturation target for premature infants and why?", 
 "answer": "Target SpO2 for premature infants (less than 36 weeks): 91-95%. Rationale: SpO2 above 95% increases risk of retinopathy of prematurity (ROP) \u2014 excess oxygen causes retinal vasoconstriction and pathological neovascularization leading to blindness. SpO2 below 88-90% increases risk of mortality, necrotizing enterocolitis (NEC), and neurodevelopmental impairment. The 91-95% target balances these competing risks. SUPPORT trial: lower SpO2 range (85-89%) increased mortality vs higher range (91-95%), establishing the lower boundary. Continuous SpO2 monitoring with alarm limits set to maintain 91-95% is standard in NICUs."}, 
{
 "domain": "Neonatal and Pediatric Care", 
 "question": "What is CPAP use in neonates and what are its benefits?", 
 "answer": "Neonatal CPAP: applied via nasal prongs, nasopharyngeal tube, or nasal mask at pressures of 4-8 cmH2O. Benefits: maintains FRC, recruits atelectatic alveoli, reduces work of breathing, preserves surfactant function, maintains airway patency, reduces apnea frequency. First-line treatment for: RDS in premature infants (COIN trial, SUPPORT trial \u2014 CPAP as effective as early intubation and surfactant for many infants greater than 28 weeks), TTN, apnea of prematurity, post-extubation support. INSURE technique: INtubate, SURfactant, Extubate to CPAP \u2014 delivers surfactant without prolonged ventilation. Complications: nasal trauma, pneumothorax, gastric distension."}
];



const ALL_DOMAINS = [
  "All Categories",
  "Mechanical Ventilation",
  "ABG and Blood Gas Interpretation",
  "Airway Management",
  "Pharmacology",
  "Patient Assessment & Diagnostics",
  "Cardiopulmonary Anatomy & Physiology",
  "Pulmonary Function Testing",
  "ARDS & Critical Care",
  "Weaning & Extubation",
  "Neonatal and Pediatric Care"
];

const COUNT_OPTIONS = [10, 25, 50, "All"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function TMCTTSTool() {
  const [domain, setDomain] = useState("All Categories");
  const [count, setCount] = useState(25);
  const [copied, setCopied] = useState(false);
  const [seed, setSeed] = useState(0);

  // TTS state
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(0.9);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const utteranceRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis);
  const playingRef = useRef(false);
  const cancelledRef = useRef(false);

  // Load voices
  useEffect(() => {
    const loadVoices = () => {
      const v = synthRef.current.getVoices();
      if (v.length > 0) {
        const english = v.filter(x => x.lang.startsWith("en"));
        setVoices(english.length > 0 ? english : v);
        if (!selectedVoice) {
          const preferred = english.find(x => x.default) || english[0] || v[0];
          if (preferred) setSelectedVoice(preferred.name);
        }
      }
    };
    loadVoices();
    synthRef.current.onvoiceschanged = loadVoices;
  }, []);

  const domainCounts = useMemo(() => {
    const map = {};
    CORPUS.forEach(e => { map[e.domain] = (map[e.domain] || 0) + 1; });
    return map;
  }, []);

  const filtered = useMemo(() => {
    const pool = domain === "All Categories" ? CORPUS : CORPUS.filter(e => e.domain === domain);
    const shuffled = shuffle(pool);
    if (count === "All") return shuffled;
    return shuffled.slice(0, Math.min(count, shuffled.length));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain, count, seed]);

  const ttsText = useMemo(() => {
    return filtered.map((e, i) =>
      `Question ${i + 1}. ${e.question} ... Answer. ${e.answer}`
    ).join("\n\n");
  }, [filtered]);

  const stopPlayback = useCallback(() => {
    cancelledRef.current = true;
    playingRef.current = false;
    synthRef.current.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentQ(0);
  }, []);

  const speakEntry = useCallback((index) => {
    if (cancelledRef.current || index >= filtered.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentQ(0);
      playingRef.current = false;
      return;
    }

    setCurrentQ(index);
    const e = filtered[index];
    const text = `Question ${index + 1}. ${e.question}. Answer. ${e.answer}`;

    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = rate;

    const voice = voices.find(v => v.name === selectedVoice);
    if (voice) utter.voice = voice;

    utter.onend = () => {
      if (!cancelledRef.current && playingRef.current) {
        setTimeout(() => speakEntry(index + 1), 600);
      }
    };
    utter.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      playingRef.current = false;
    };

    utteranceRef.current = utter;
    synthRef.current.speak(utter);
  }, [filtered, rate, selectedVoice, voices]);

  const handlePlay = useCallback(() => {
    if (isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }
    cancelledRef.current = false;
    playingRef.current = true;
    setIsPlaying(true);
    setIsPaused(false);
    speakEntry(0);
  }, [isPaused, speakEntry]);

  const handlePause = useCallback(() => {
    synthRef.current.pause();
    setIsPaused(true);
    setIsPlaying(false);
  }, []);

  // Stop on unmount
  useEffect(() => () => synthRef.current.cancel(), []);

  const handleCopy = () => {
    navigator.clipboard.writeText(ttsText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  const availableInDomain = domain === "All Categories" ? CORPUS.length : (domainCounts[domain] || 0);
  const actualCount = count === "All" ? availableInDomain : Math.min(count, availableInDomain);

  const S = {
    root: {
      minHeight: "100vh", background: "#0d0f18", color: "#ddd",
      fontFamily: "Georgia, serif", padding: "28px 20px"
    },
    wrap: { maxWidth: 820, margin: "0 auto" },
    topLabel: { fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6a5fa0", display: "block", marginBottom: 6 },
    h1: { fontSize: 22, fontWeight: "normal", color: "#c8bced", margin: "0 0 5px 0" },
    sub: { fontSize: 12, color: "#555", margin: 0, lineHeight: 1.6 },
    divider: { margin: "18px 0", borderTop: "1px solid #1a1c2e", borderBottom: "none" },
    select: {
      width: "100%", background: "#14162a", color: "#ddd",
      border: "1px solid #252845", borderRadius: 5, padding: "9px 12px",
      fontSize: 13, cursor: "pointer", outline: "none", fontFamily: "Georgia, serif"
    },
    chip: (active) => ({
      padding: "7px 13px", fontSize: 12, borderRadius: 5, border: "1px solid",
      cursor: "pointer", transition: "all 0.15s",
      borderColor: active ? "#7060a8" : "#252845",
      background: active ? "#221c40" : "#14162a",
      color: active ? "#c8bced" : "#666",
      fontFamily: "Georgia, serif"
    }),
    ttsPanel: {
      background: "#12142a", border: "1px solid #1e2040",
      borderRadius: 8, padding: "16px 18px", marginBottom: 16
    },
    ttsRow: { display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" },
    ttsBtn: (color, bg, border) => ({
      padding: "9px 22px", fontSize: 12, borderRadius: 5, cursor: "pointer",
      border: `1px solid ${border}`, background: bg, color: color,
      fontFamily: "Georgia, serif", letterSpacing: "0.06em", minWidth: 80
    }),
    progressBar: {
      height: 3, background: "#1a1c2e", borderRadius: 2, marginTop: 10, overflow: "hidden"
    },
    progressFill: {
      height: "100%", background: "#7060a8", borderRadius: 2,
      width: actualCount > 0 ? `${((currentQ + (isPlaying ? 1 : 0)) / actualCount) * 100}%` : "0%",
      transition: "width 0.4s"
    }
  };

  return (
    <div style={S.root}>
      <div style={S.wrap}>

        {/* Header */}
        <div style={{ marginBottom: 22 }}>
          <span style={S.topLabel}>TEAI — TMC Exam Prep</span>
          <h1 style={S.h1}>TTS Study Tool</h1>
          <p style={S.sub}>Built-in voice player. No external tools needed. Or copy text for any TTS app.</p>
        </div>

        <hr style={S.divider} />

        {/* Category + Count */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 18, marginBottom: 18, alignItems: "end" }}>
          <div>
            <span style={S.topLabel}>Category</span>
            <select value={domain} onChange={e => { stopPlayback(); setDomain(e.target.value); }} style={S.select}>
              {ALL_DOMAINS.map(d => (
                <option key={d} value={d}>
                  {d === "All Categories" ? `All Categories (${CORPUS.length})` : `${d} (${domainCounts[d] || 0})`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <span style={S.topLabel}>How many</span>
            <div style={{ display: "flex", gap: 6 }}>
              {COUNT_OPTIONS.map(opt => (
                <button key={opt} onClick={() => { stopPlayback(); setCount(opt); }} style={S.chip(count === opt)}>{opt}</button>
              ))}
            </div>
          </div>
        </div>

        {/* TTS Controls */}
        <div style={S.ttsPanel}>
          <span style={{ ...S.topLabel, marginBottom: 12 }}>Voice Settings</span>
          <div style={S.ttsRow}>

            {/* Voice picker */}
            <div style={{ flex: "2 1 220px" }}>
              <span style={{ ...S.topLabel, marginBottom: 5 }}>Voice</span>
              <select
                value={selectedVoice || ""}
                onChange={e => setSelectedVoice(e.target.value)}
                style={{ ...S.select, fontSize: 12 }}
              >
                {voices.length === 0 && <option value="">Loading voices...</option>}
                {voices.map(v => (
                  <option key={v.name} value={v.name}>
                    {v.name} {v.localService ? "" : "(remote)"}
                  </option>
                ))}
              </select>
            </div>

            {/* Speed slider */}
            <div style={{ flex: "1 1 160px" }}>
              <span style={{ ...S.topLabel, marginBottom: 5 }}>Speed: {rate.toFixed(2)}x</span>
              <input
                type="range" min="0.5" max="1.8" step="0.05"
                value={rate}
                onChange={e => setRate(parseFloat(e.target.value))}
                style={{ width: "100%", accentColor: "#7060a8", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#444", marginTop: 2 }}>
                <span>0.5x slow</span><span>1.0x normal</span><span>1.8x fast</span>
              </div>
            </div>

            {/* Playback buttons */}
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end", paddingBottom: 2 }}>
              {!isPlaying && !isPaused && (
                <button onClick={handlePlay} style={S.ttsBtn("#0d0f18", "#c8bced", "#c8bced")}>
                  ▶ Play
                </button>
              )}
              {isPlaying && (
                <button onClick={handlePause} style={S.ttsBtn("#c8bced", "#221c40", "#7060a8")}>
                  ⏸ Pause
                </button>
              )}
              {isPaused && (
                <button onClick={handlePlay} style={S.ttsBtn("#0d0f18", "#c8bced", "#c8bced")}>
                  ▶ Resume
                </button>
              )}
              {(isPlaying || isPaused) && (
                <button onClick={stopPlayback} style={S.ttsBtn("#e08080", "#2a1010", "#7a3030")}>
                  ■ Stop
                </button>
              )}
            </div>
          </div>

          {/* Progress */}
          {(isPlaying || isPaused || currentQ > 0) && (
            <div style={{ marginTop: 10 }}>
              <div style={{ fontSize: 10, color: "#6a5fa0", marginBottom: 4 }}>
                {isPlaying ? `Speaking question ${currentQ + 1} of ${actualCount}` :
                 isPaused ? `Paused at question ${currentQ + 1} of ${actualCount}` :
                 `Done — ${actualCount} questions`}
              </div>
              <div style={S.progressBar}><div style={S.progressFill} /></div>
            </div>
          )}
        </div>

        {/* Status + copy bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{ fontSize: 12, color: "#444" }}>
            {actualCount} question{actualCount !== 1 ? "s" : ""} — <span style={{ color: "#6a5fa0" }}>
              {domain === "All Categories" ? "all categories" : domain}
            </span>
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => { stopPlayback(); setSeed(s => s + 1); }}
              style={S.chip(false)}>Reshuffle</button>
            <button onClick={handleCopy} style={{
              ...S.chip(false),
              borderColor: copied ? "#3a7a3a" : "#7060a8",
              background: copied ? "#122012" : "#221c40",
              color: copied ? "#7ada7a" : "#c8bced"
            }}>
              {copied ? "Copied!" : "Copy Text"}
            </button>
          </div>
        </div>

        {/* Output textarea */}
        <textarea
          readOnly value={ttsText}
          style={{
            width: "100%", minHeight: 380, background: "#0a0c18", color: "#aaa",
            border: "1px solid #181a2e", borderRadius: 7, padding: "16px 18px",
            fontSize: 12, lineHeight: 1.85, fontFamily: "Georgia, serif",
            resize: "vertical", outline: "none", boxSizing: "border-box"
          }}
        />

        <div style={{ marginTop: 12, fontSize: 11, color: "#333", lineHeight: 1.7 }}>
          Hit Play to hear questions read aloud in the browser. Or Copy Text and paste into NaturalReader, Speechify, or Word Read Aloud.
        </div>
      </div>
    </div>
  );
}
