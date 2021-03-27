
var boxData = {
    sorethroat: [
        {
            "partial": [{ text: "Viral Infections" }, { text: "Bacterial Infections" }, { text: "Meningitis" }, { text: "Neck Deep Tissue Infection" }, { text: "Candida Infection" }, { text: "Strep Throat" }],
            "flags": [{ text: "Shortness of Breath" }, { text: "Stridor" }, { text: "Deviated Uvula" }, { text: "Drooling/Trouble Swallowing" }, { text: "Stiff Neck" }],
            "activity": ["None"],
            "protocol": ["MCP sore throat; For pain: Lozenges first line. Ibuprofen second line, for elevated temperature: acetaminophen, salt water gargles and drink warm fluids for inflammation.<br/>MCP hoarseness: Rest vocal chords and avoid irritants (cigarette smoking, yelling heartburn).<br/>Return if not improving in 3 days or immediately if worsening symptoms or Red Flags."]
        }

    ],
    earpain: [
        {
            "partial": [{ text: "Otitis Media/Externa" }, { text: "Eustachian tube dysfunction" }, { text: "Nasopharyngeal pathology" }, { text: "Deep space head/neck" }, { text: "infections" }, { text: "Meningitis" }, { text: "Mastoiditis" }, { text: "Ruptured Ear Drum" }, { text: "TMJ Dysfunction" }],
            "flags": [{ text: "Stiff Neck and Fever" }, { text: "Posterior Ear Pain and/or Mastoid Erythema" }],
            "activity": [{ text: "None" }],
            "protocol": ["MCP for Mild Otitis Externa: Soak wick of cotton ball with ear drops. Place in the ear for 24 hours while using the drops. Remove the cotton wick and continue drops for 1 week (3 days after the symptoms have resolved). Keep the ear canal dry.<br/>MCP for TMJ: Refer to dental if history of teeth grinding, ibuprofen as needed for pain, instruct on avoidance of triggers and home jaw exercises.<br/>Return if not improving in 3 days, worsening symptoms, dizziness, loss of hearing, stiff neck."]
        }
    ],
    cold: [
        {
            "partial": [{ text: "Allergic or Seasonal rhinitis" }, { text: "Bacterial pharyngitis or tonsilitis" }, { text: "Acute bacterial rhinosinusitis" }, { text: "Influenza" }, { text: "Pertussis" }],
            "flags": [{ text: "Abnormal Vital Signs" }, { text: "Shortness of Breath" }, { text: "Stiff Neck" }, { text: "Altered Mental Status" }, { text: "Coughing up blood clots or frank blood" }],
            "activity": [{ text: "-Consider quarters/contagious precautions while febrile" }],
            "protocol": ["MCP for Cold: Counsel the Soldier to drink plenty of fluids, get plenty of rest, and to cover their mouth when coughing and wash their hands to prevent spread. Stop or limit smoking. Ibuprofen for pain, acetaminophen for elevated temperature, decongestant for nasal congestion, guaifenesin for mucous, or antihistamine for allergies.<br/>Return if it does not improve in 7 days, worsening symptoms, develop sinus pain, lightheaded, neck pain, or fever."]

        }
    ],
    ringing: [
        {
                "partial": [{ text: "Cerumen Impaction" }, { text: "Otitis Media" }, { text: "Ruptured Ear Drum" }, { text: "Eustachian Tube Dysfunction" }, { text: "Hearing Loss " }, {text:"Disorders of the Jaw Joint "}, {text: "Severe Anxiety "}, {text: "Neck Injuries "}],
                "flags": [{ text: "Altered Mental Status" }, { text: "Focal Neurological Symptom or Sign" }, { text: "Dizziness" }],
                "activity": [{ text: "Avoid loud noise exposure x48 hours" }],
                "protocol": ["Ringing sound after exposure to excessive noise exposure should resolve within 24 hours.<br/>Return to clinic if the ringing does not resolve after 24 hours.<br/>Return if associated with dizziness (spinning sensation) or worsening symptoms."]
        }
    ],
    nose: [
        {
            "partial": [{ text: "Upper Respiratory Infections" }, { text: "Allergic or Viral Rhinitis" }, { text: "Trauma" }, { text: "Bleeding Disorder" }, { text: "Foreign Body" }],
            "flags": [{ text: "Airway Compromise" }, { text: "Orthostatic Hypotension" }, { text: "Bleeding from Gums" }, { text: "Inability to Move Eye" }],
            "activity": [{ text: "-None" }],
            "protocol": ["Do not blow the nose vigorously or wipe the middle of the nose, as it can cause a nosebleed.<br/>Medications: nasal saline for prevention if the air is dry, oxymetazoline if recurrent with nasal sx.<br/>Humidifier can also be used if the air is dry.<br/>Return if unable to get a recurrent nosebleed to stop, notice bleeding from other sites, feeling lightheaded or tired, losing a significant amount of blood, or recurrent without common cold sx."]
        }
    ],
    back:[
        {
            "partial": [{ text: "Muscle Sprain/Strain" }, { text: "Fracture" }, { text: "Infection " }, { text: "Renal Stone/UTI" }, { text: "Arthritis" }, { text: "Cauda Equina Syndrome" }],
            "flags": [{ text: "Fever" }, { text: "Saddle Anesthesia" }, { text: "Urinary Retention/Incontinence" }, { text: "Fecal Incontinence" }, { text: "Motor Deficits" }, { text: "Trauma with Vertebral Tenderness or Neuropathy" }, { text: "Dysuria/Frequency" }, { text: " Chest/Abdominal Pain " }],
            "activity": [{ text: "- No repetitive bending or lifting but may lift/ carry up to 40lbs" }, { text: "- Perform stretching, core strengthening home regiment during PT" },{ text: "-  No ruck marching, running, or jumping but may walk, bike, or swim for cardio" }],
            "protocol": ["Provide home exercise program. Activity modification as appropriate.<br/>Intermittent ice or heat IAW local protocol for inflammation<br/>Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed<br/>Refer to PT if direct access is available<br/>Follow-up: Immediate follow-up for a DP1 or DP2 symptoms. Routine follow-up is recommended for any symptoms that do not improve or worsen"]
   
        }
    ],
    wrist:[
        {
            "partial": [{ text: "Fracture" }, { text: "Carpal Tunnel" }, { text: "Trauma" }, { text: "Arthritis" }, { text: "Bursitis" }, { text: "Tendonitis " }, { text: "Muscle Strain" }],
            "flags": [{ text: "Distal Pulses Abnormal" }, { text: "Distal Sensation Abnormal" }, { text: "Deformity" }, { text: "Open Fracture" }],
            "activity": [{ text: "- May Lift, push, pull up to 5 lbs" }, { text: "- May wrap or wear a brace for comfort" },{ text: "- No repetitive bending of wrist" },{ text: "- Perform stretching, core strengthening home regiment during PT" }],
            "protocol": ["Provide home exercise program. Activity modification as appropriate<br/>Intermittent ice or heat for inflammation<br/>Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed<br/>Refer to PT if direct access is available<br/>Follow-up: Immediate follow-up for a DP1 or DP2 symptoms. Routine follow-up is recommended for any symptoms that do not improve or worsen"]
   
        }
    ],
    knee:[
        {
            "partial": [{ text: "Ligament or Cartilage Injury" }, { text: "Arthritis" }, { text: "Overuse Injury" }, { text: "Infection/Inflammation" }, { text: "Bursitis" }],
            "flags": [{ text: "Abnormal PMS" }, { text: "Deformity" }, { text: "High Energy Trauma" }],
            "activity": [{ text: "- No running, jumping but may walk up to ¼ mile at own pace/ distance and stand up to 15min" }, { text: "- No repetitive squatting but may Lift, carry, push, pull up to 25 lbs" },{ text: "- Perform stretching, core strengthening home regiment during PT" },{ text: "- May wear a brace or wrap" }],
            "protocol": ["Provide home exercise program. Activity modification as appropriate.<br/>Intermittent ice or heat for inflammation.<br/>Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed<br/>Refer to PT if direct access is available<br/>Follow-up: Immediate follow-up for a DP1 or DP2 symptoms. Routine follow-up is recommended for any symptoms that do not improve or worsen"]
   
        }
    ],
    nausea:[
        {
            "partial": [{ text: "Medication" }, { text: "Infection" }, { text: "Intense Pain" }, { text: "Pregnancy" }, { text: "Concussion" }, { text: "Heartburn" }],
            "flags": [{ text: "Vomiting Blood or Coffee Grinds, Melena" }, { text: "Neurologic Symptoms" }, { text: "Chest Pain" }, { text: "Abdominal Pain followed by Nausea" }, { text: "Abdominal Distension" }],
            "activity": [{ text: "- No food handling, if work in a DFAC, until symptoms have resolved x 48 hours" }],
            "protocol": ["Hand washing protocol. Special food handler precautions<br/>Notify supervising NCO if DFAC food is suspected or multiple cases identified. <br/>Initiate a clear liquid diet with broth, sports drinks, clear non-caffeine soft drinks, fruit juice, ice chips to maintain calories and hydration. When vomiting controlled, start BRAT diet of simple carbohydrates. <br/> Return to clinic if not improved in 48 hours or any of the red flags or other symptoms develop."]
        }
    ],
    painfulurination:[
        {
            "partial": [{ text: "Kidney Infection" }, { text: "Urinary Tract Infection" }, { text: "Kidney Stone" }, { text: "Uncontrolled Diabetes" }, { text: "BPH" }, { text: "STI, Vaginitis" }],
            "flags": [{ text: "Systemic Inflammatory Response Syndrome" }, { text: "Flank Pain" }, { text: "Severe Abdominal Pain" }, { text: "Gross Hematuria or Passing Blood Clots" }],
            "activity": [{ text: "- None" }],
            "protocol": ["UTI: drink 8+ glasses of water/day. Phenazopyridine as needed. Counsel on it changing urine orange and potential to dye contacts. <br/>First line agent: trimethoprim/sulfamethoxazole, if the MTF antibiotic resistance is greater than 20% or patient has sulfa allergy, use second line agent. <br/>Second line agent: nitrofurantoin, if the patient reports an allergy to nitrofurantoin, refer to AEM. <br/> Return to clinic if symptoms not improving within 24 hours, development of new symptoms, worsening symptoms."]
        }
    ],
    hip:[
        {
            "partial": [{ text: "Arthritis" }, { text: "Stress Fracture" }, { text: "Trochanteric Bursitis" }, { text: "Tendinitis" }, { text: "Muscle Strain" }, { text: "Hernia" }, { text: "Referred Pain"}],
            "flags": [{ text: "Abnormal PMS" }, { text: "Deformity" }, { text: "High Energy Trauma" }, { text: "Suspect Stress Fracture (increased with weight bearing or during exercise, endurance training, change in exercise routine)"},{ text:"Severe Pain" }],
            "activity": [{ text: "No running, jumping but may walk up to ¼ mile at own pace/ distance and stand up to 20min" }, {text: "May Lift, carry, push, pull up to 25 lbs"}, {text: "No repetitive lifting from floor"}, {text: "Perform stretching, core strengthening home regiment during PT"}],
            "protocol": ["Provide home exercise program. Activity modification as appropriate. Intermittent ice or heat for inflammation. Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed. Refer to PT if direct access is available."]
        }
    ],
    ankle:[
        {
            "partial": [{ text: "Sprain/Strain" }, { text: "Fracture" }, { text: "Tendon Rupture" }, { text: "Arthritis" }, { text: "Bursitis" }, { text: "Tendinopathy" }],
            "flags": [{ text: "Abnormal Distal Pulse" }, { text: "Abnormal Sensation" }, { text: "Deformity" }],
            "activity": [{ text: "No running, jumping, rucking but may walk up to ¼ mile at own pace/ distance and stand up to 20min" }, {text: "May Lift, carry, up to 25 lbs"},{text: "Limit walking over uneven terraine"},{text: "Perform stretching, strengthening home regiment during PT"}, {text: "May wear brace or wrap"}],
            "protocol": ["Provide home exercise program, wrap the andl, and activity modification as appropriate. Intermittent ice for inflammation. Elevate for swelling. Medication: analgesic balm for mile pain, ibuprofen(1st line) and ketorolac (2nd line) for moderate pain as needed. Efer to PT if direct access is available. Follow-up: Immediate follow-up for a DP1 or DP2 symptoms. Return to clinic if worsening or not improving within 1 week."]
        }
    ],
    foot:[
        {
            "partial": [{ text: "Injury" }, { text: "Overuse" }, { text: "Plantar Fasciitis" }, { text: "Tarsal Tunnel Syndrome" }, { text: "Achilles Tendinopathy" }, { text: "Ingrown Toenail" }, {text: "Bunion"}],
            "flags": [{ text: " Abnormal Distal Pulse " }, { text: " Abnormal Sensation" }, { text: " Deformity" }, { text: " Suspect Stress Fracture (increased with weight bearing or during exercise, endurance training, change in exercise routine)" }],
            "activity": [{ text: "No running, jumping, rucking but may walk up to ¼ mile at own pace/ distance and stand up to 20min " }, {text: "May Lift, carry, up to 25 lbs "}, {text: "Perform stretching, strengthening home regiment during PT"}],
            "protocol": ["Ingrown Toenail: Soak in soap and water for 20 mins three times per day. Place cotton under the toenail. Consult provider if toenail removal required(protocol Ingrown Toenail J-18. <br/> Subungual Hematoma: Discuss with supervisor. Treat. Soak in soap and water twice a day for 3 days. <br/>Plantar fasciitis: Home exercise/stretching program, intermittent ice for inflammation, ibuprofen as needed for pain. Consider activity modification and arch support. Refer to PT if direct access is available. <br/>Blisters, Callus (see J-15  Friction Blisters on Feet). Use moleskin. Consider activity modification. <br/>Plantar Wart(see J-16 Corns on Feet).Discuss with supervising provider. <br/>Return to clinic if worsens, new symptoms develop, or not improving within 1 week or interferes with performance of normal duties/activities."]
        }
    ],
    extremitynonjoint:[
        {
            "partial": [{ text: "Fracture" }, { text: "Laceration" }, { text: "Bruise" }, { text: "Stress Reaction" }],
            "flags": [{ text: "Abnormal Distal Pulse" }, { text: "Abnormal Sensation" }, { text: "Deformity" }, { text: "Cola Colored Urine" }, {text: "Inability to Urinate"}],
            "activity": [{ text: "Use the activity limitations for the joint in the protocols above that is closest to the area." }],
            "protocol": ["Provide home exercise program. Activity modification as appropriate. <br/>Intermittent ice for inflammation as needed. <br/>Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed. <br/>Refer to PT if direct access is available. <br/>Return to clinic if worsening or not improving within 1 week."]
        }
    ],
    constipation:[
        {
            "partial": [{ text: "Obstruction" }, { text: "Cancer " }, { text: "Hypothyroidism" }, { text: "Constipation" }, { text: "Associated with Hemorrhoids" }],
            "flags": [{ text: "Diarrhea at night" }, { text: "Iron deficiency anemia" }, { text: "Vomiting" }],
            "activity": [{ text: "None" }],
            "protocol": ["Counsel the Soldier to drink 8 glasses of water per day and eat foods that are high in fiber. <br/>Medication: bisacodyl for acute constipation followed by a polyethylene glycol for 2 weeks (1st line) or docusate sodium for 1 week (2nd line). <br/>Return to clinic for blood in stool, abdominal pain, or not having a BM for 3 days."]
        }
    ],
    difficultywhenswallowing:[
        {
            "partial": [{ text: "Food bolus obstruction" }, { text: "Esophagitis" }, { text: "Ring, Web, Achalasia" }, { text: "Throat Infection" }],
            "flags": [{ text: "Airway compromise" }, { text: "Coughing, choking when swallowing" }],
            "activity": [{ text: "None" }],
            "protocol": ["Do not administer meat tenderizers to Soldiers with an esophageal food impaction.  It could cause serious esophageal injury.  Glucagon can be administered to relax the esophagus as an initial attempt for the Soldier to spontaneously pass the food bolus when a referral for an endoscopic evaluation/ treatment is not available.  <b>Treatment must be prescribed by a supervising privileged provider.</b>"]
        }
    ],
    heartburn:[
        {
            "partial": [{ text: "Gastroesophageal Reflux" }, { text: "Myocardial Infarction" }, { text: "Stomach/Duodenal Ulcer" }, { text: "Cancer" }, { text: "Pancreatitis" }],
            "flags": [{ text: "Vomiting Blood or Coffee Grinds" }, { text: "Melena" }, { text: "Angina, SOB" }, { text: "Radiation to Back" }],
            "activity": [{ text: "None" }],
            "protocol": ["Medication: ranitidine as needed (up to 2 doses in 24 hours). <br/>Lifestyle modification: weight loss if indicated, smoking cessation if indicated, elevation of head of bed, avoidance of foods that make it worse. <br/>Return to clinic if any of the red flags or symptoms develop, not improved with Minor Care protocol, or taking ranitidine more than once per week on average."]
        }
    ],
    shortnessofbreath:[
        {
            "partial": [{ text: "Asthma" }, { text: "Anxiety" }, { text: "Myocardial Infarction" }, { text: "Pulmonary Embolism" }, { text: "Pneumonia, Bronchitis" }, { text: "Deconditioning" }],
            "flags": [{ text: "Cyanosis" }, { text: "Ancillary muscles" }, { text: "Sp02<90%" }, { text: "SIRS Criteria" }, { text: "Airway Swelling" }, { text: "Hives" }, { text: "Altered Mental Status(AMS)" }],
            "activity": [{ text: "Cold Symptoms <br/>Aerobic training at own pace/distance x 3 days <br/> Limit exposure to temperatures below <50 degrees F" }],
            "protocol": ["Cold or allergy symptoms: A3 Minor Care Protocol. <br/>Panic attack symptoms: Check EKG. Monitor pulse oximeter. Supervised deep breathing exercises. Referral to provider now if oxygenation decreases or symptoms do not resolve. Refer to behavioral health after dyspnea symptoms have resolved."]
        }
    ],
    chestpain:[
        {
            "partial": [{ text: "Myocardial Infarction" }, { text: "Pulmonary Embolism"}, { text: "Pneumonia, Bronchitis" }, { text: "Anxiety" }, { text: "Heartburn" }, { text: "Musculoskeletal" }],
            "flags": [{ text: "Irregular Pulse" }, { text: "H/O or FH of Heart Problems" }, { text: "Shoulder, jaw pain or pressure" }],
            "activity": [{ text: "MSK Chest Pain <br/>May lift, push up to 25 lbs Cold Symptoms <br/>Aerobic training at own pace/distance x 3 days <br/>Limit exposure to temperatures below <50 degrees F" }],
            "protocol": ["MCP for Cold symptoms: A-3 Protocol<br/>Heartburn: C-7 (Heartburn) Protocol. <br/>MCP for panic attack symptoms (chest tightness, palpitations, anxious, lightheaded):  Check EKG.  If EKG is normal, initiate observed deep breathing exercises.  Place a pulse oximeter on the Soldier&#39;s finger.  Have the Soldier lay back at a 45 degree angle with legs uncrossed and initiate diaphragmatic breathing exercises with deep, slow inhalation over 4 seconds and exhalation over another 4 second count.  If the SpO2 starts to drop, disposition the Soldier as &#34;Provider Now&#34;.  Refer Soldier to behavioral health after initial panic attack decreases in intensity.<br/>MCP for musculoskeletal chest pain:  Pain must be reproducible and directly correspond to a supporting history.  Medications: ibuprofen as needed for muscle complaints.  Return to clinic if pain increases, lasts longer than three days, shortness of breath/ dizziness/ or new symptoms develop.  <b>Must discuss with supervising privileged provider before Soldier leaves screening area.</b>"]
        }
    ],
    sexuallytransmittedinfections:[
        {
            "partial": [{ text: "Testicular Torsion" }, { text: "Hernia" }, { text: "Muscle/Tendon Strain" }, { text: "Stress Fracture" }, { text: "Hip injury" }],
            "flags": [{text: " Female Pelvic Pain with Intercourse" }, { text: " Pregnant (positive pregnancy test)" }, { text: " Orthostatic, Fever"}],
            "activity": [{ text: "None" }],
            "protocol": ["Counsel on avoidance of sexual contact until diagnosis has been confirmed/ruled-out, safe sex practices, and risks of high risk sexual behavior. <br/>STD Screen. Provide treatment with ceftriaxone and azithromycin if positive or symptomatic. Notify provider. Refer to community health. <br/>RTC if worsening symptoms, new symptoms arise, or not improving within 2 days."]
        }
    ],
    problemswithvoiding:[
        {
            "partial": [{ text: "Urinary Obstruction" }, { text: "Benign Prostatic Hypertrophy" }, { text: "UTI, STI" }, { text: "Stress Incontinence" }],
            "flags": [{ text: "Inability to void x 12 hours" }, { text: "Fever" }, { text: "Cola Colored Urine" }, { text: "Blood or Clots in Urine" }],
            "activity": [{ text: "Incontinence<br/>Access to a Restroom <br/>No jumping" }],
            "protocol": ["If urethral discharge is present, use SCP E-3.<br/>If UA is leukocyte esterase positive, 2+ WBCs, or UTI symptoms in a female, use SCP E-1.<br/>If leaking urine when coughing, sneezing, jumping, counsel patient on home exercises.<br/>RTC if worsening symptoms, new symptoms arise, or not improved within stated timeframe, 1 week for urethral discharge, 24 hours for UTI."]
        }
    ],
    drowsinessconfusion:[
        {
            "partial": [{ text: "Hypoglycemia" }, { text: "Hypotension" }, { text: "Hypoxia" }, { text: "Concussion" }, { text: "Infection" }, { text: "Intoxication" }],
            "flags": [{ text: "Abnormal Vital Signs" }, { text: "Altered Mental Status" }, { text: "Focal Neurological Deficit" }, { text: "Recent Trauma" }],
            "activity": [{ text: "Allow for 8 Hours of uninterrupted sleep in any given 24 hour period" }],
            "protocol": ["Viral syndrome: ibuprofen as needed for fatigue/body aches. Drink plenty of water. Get plenty of sleep. Screen other symptoms as needed.<br/>Insomnia/Fatigue/Stress: provide sleep hygiene education, consider providing melatonin or activity modification, recommend self-reflection to find a way to relieve stress, and offer a routine referral to a behavioral health asset, if available.<br/>Return to clinic if not improving, new symptoms arise, or symptoms are worsening."]
        }
    ],
    depressionnervousnessanxietytension:[
        {
            "partial": [{ text: "Depression" }, { text: "Anxiety" }, { text: "Hypoxia" }, { text: "Hypo/hyperthyroidism" }, { text: "Substance intoxication or withdrawal" }],
            "flags": [{ text: "Homicidal Intent or Attempt" }, { text: "Suicide Intent or Attempt" }, { text: "Self-Injury" }, { text: "Altered Mental Status" }],
            "activity": [{ text: "Escort to Behavioral Health or Emergency Room" }],
            "protocol": ["Offer assistance through Behavioral Health, Chaplain, Chain of Command, Army Community Services, Military and Family Life Consultants, Military One Source, or Army Wellness Center. Offer to escort the Soldier to the service. Must get cleared by the supervising medic prior to the Soldier leaving the screening area."]
        }
    ],
    mildtraumaticbraininjury:[
        {
            "partial": [{ text: "Headache/migraine" }, { text: "Concussion" }, { text: "Intracerebral Hemorrhage" }, { text: "Anxiety" }, { text: "Stroke" }, { text: "Spinal cord injury" }, {text: "Seizure"}, {text: "Dehydration"}],
            "flags": [{ text: "Deteriorating Level of Consciousness" }, { text: "Double Vision" }, { text: "Increased Restlessness, combative or agitated behavior"}, {text: "Repeat vomiting"}, {text: "Positive result from structural brain injury detection device (if available)"}, {text: "Seizure"},{text: "Weakness or tingling in arms or legs"}, {text: "Severe or worsening headache"},{text: "Abnormal Neuro Exam"},{text: "Battle sign, Raccoon eyes"},{text: "Suspected skull fracture"},{text: "Anticoagulant use"}],
            "activity": [{ text: "Use the Concussion Management Tool (CMT) and associated Progressive Return to Activity (PRA) for specific management<br/><br/>A minimum of 24 hour rest, defined as: <br/>1. Rest with extremely limited cognitive activity <br/>2. Limit physical activities to those of daily living and extremely light leisure activity <br/>3. Avoid working, exercising, playing video games, studying, or driving <br/>4. Avoid any potentially concussive events <br/>5. Avoid caffeine and alcohol <br/><br/>Reassess using the MACE 2 after 24 hours rest" }],
            "protocol": ["All positive MACE 2 screens should be referred to the AEM or Provider for further evaluation<br/>Negative MACE 2: 24 hour rest period, review Acute Concussion Educational Brochure with patient, and counsel Soldier to return after 24 hour rest for reevaluation. If no symptoms, perform exertional testing.<br/>Return to Clinic if worsening symptoms, new symptoms<br/>More information is available at: https://dvbic.dcoe.mil<br/>See appendix for MACE 2 card, CMT, and PRA resources"]
        }
    ],
    feverchills:[
        {
            "partial": [{ text: "Malaise" }, { text: "Cold Symptoms" }, { text: "Sore Throat, Ear Pain " }, { text: "Heat/Cold Injury" }, { text: "Diarrhea" }, { text: "Pain with urination" }],
            "flags": [{ text: "Heat Injury" }, { text: "Stiff Neck" }, { text: "Light sensitivity" }, { text: "Pregnant" }, {text: "Seizure"}, {text: "Lightheaded"}],
            "activity": [{ text: "For a Fever <br/>Consider Quarters x 24-48 hours (must discuss with supervising privileged provider) " }],
            "protocol": ["OTC Medication: acetaminophen as needed for elevated temperature (No other medications with acetaminophen. No alcohol), ibuprofen as needed for malaise.<br/>Stay hydrated by drinking fluids to keep your urine mostly clear. Get plenty of rest.<br/>Return if red flags, new symptoms, lasts longer than 48 hours, or fever not controlled with acetaminophen."]
        }
    ],
    eyepainrednessdischargeitchinginjury: [
        {
            "partial": [{ text: "Blepharitis" }, { text: "Allergies" }, { text: "Conjunctivitis" }, { text: "Corneal Abrasion/Trauma" }, { text: "Subconjunctival Hemorrhage" }, { text: "Keratitis/Iritis" }],
            "flags": [{ text: "Fixed, Abnormal Pupil" }, { text: "Visual Acuity Change" }, { text: "Observed Foreign Body" }, { text: "Chemical Exposure" }, { text: "Fluid Level over Iris, Pupil" }],
            "activity": [{ text: "None" }],
            "protocol": ["Stye treated with warm compress x 15min, 4x/day followed by massaging area.<br/>Blepharitis treated with warm compresses (like stye), avoidance of make-up, and washing with warm water and tear free shampoo.<br/>Dry eyes are treated with artificial tears lubricating drops as needed.<br/>Viral, allergic conjunctivitis is treated with warm or cool compresses, topical antihistamine/decongestant drops, and contagion precautions.<br/>Subconjuntival hemorrhage is a demarcated area of blood (outside of the iris) with normal vision, no discharge, light sensitivity, or foreign body sensation. Typically resolves in 1-2 weeks."]
        }
    ],
    eyelidproblem:[
        {
            "partial": [{ text: "Stye, Blepharitis" }, { text: "Dermatitis" }, { text: "Infection" }, { text: "Eyelid laceration" }],
            "flags": [{ text: "Open Globe" }, { text: "High Risk Laceration" }, { text: "Decreased Visual Acuity" }, { text: "Double Vision" }],
            "activity": [{ text: "none" }],
            "protocol": ["Stye, chalazion is treated with warm compress x 15min, 4x/day followed by massaging area.<br/>Blepharitis is treated with warm compresses (like stye), avoidance of make-up, and washing with warm water and tear free shampoo.<br/>Contact dermatitis is treated with avoidance of the exposure and hydrocortisone ointment 1% twice a day for 1 week.<br/>Return to clinic if the condition is worsening, new symptoms develop, or it is not improving within 1 week."]
        }
    ],
    decreasedvisionseeingspotsrequestforglasses:[
        {
            "partial": [{ text: "Trauma" }, { text: "Migraine" }, { text: "Hemorrhage" }, { text: "Infection" }, { text: "Ischemia, Stroke" }],
            "flags": [{ text: "Trauma" }, { text: "Recent Surgery" }, { text: "Chemical Exposure" }, { text: "Fluid Level over Iris, Pupil" }, { text: "Neurologic Deficits"}],
            "activity": [{ text: "None" }],
            "protocol": ["Decreased visual acuity worse than 20/40: Gradual Onset. Refer to optometry for evaluation for glasses.<br/>Floaters are common and benign. Provide reassurance.<br/>Return to clinic if the condition is worsening or new symptoms or new symptoms develop."]
        }
    ],
    seeingdoublediplopia:[
        {
            "partial": [{ text: "Intoxication" }, { text: "Prescription Eyeglasses" }, { text: "Muscle Weakness" }, { text: "Trauma" }],
            "flags": [{ text: "Trauma" }, { text: "Neurologic Deficits" }],
            "activity": [{ text: "No Driving" },{ text: "No Firing Weapons" },{ text: "No Duties Requiring Depth Perception" }],
            "protocol": ["Long-standing history or started with new eyeglasses, refer to optometry and patch the eye for symptomatic relief. No driving a vehicle, firing a weapon or other duties requiring depth perception until the Soldier has been evaluated by an optometrist.<br/>Return to clinic if symptoms worsen or new symptoms develop."]
        }
    ],
    heatinjuryhyperthermia:[
        {
            "partial": [{ text: "Heatstroke" }, { text: "Heat Cramps" }, { text: "Heat Exhaustion" }, { text: "Fever/ Infection" }, { text: "Dehydration" }, { text: "Hyperthyroidism" }],
            "flags": [{ text: "Altered mental status" }, { text: "Abnormal vital signs" }],
            "activity": [{ text: "No significant exercise x 48 hours<br/> Limit exposure to hot environments" }],
            "protocol": ["MCP for Mild Heat Injury<br/>COOL: Place the Soldier in a cool or shaded place.<br/>HYDRATE: Give the Soldier at least one liter of cool water to drink in the first 30 minutes and then at least one liter of water per hour the next 2 hours. Advise the Soldier to decrease his activity for the next 24 hours.<br/>REASSESS: If they get worse, or if the Soldier's temperature exceeds 101F refer the Soldier to the privileged provider."]
        }
    ],
    hypothermia:[
        {
            "partial": [{ text: "Environmental Exposure" }, { text: "Exhaustion and Malnutrition" }, { text: "Hypothyroidism" }, { text: "Sepsis" }],
            "flags": [{ text: "Temperature < 96 degrees F" }, { text: "Altered Mental Status" }, { text: "Abnormal Vital Signs" }, { text: "Frostbite" }, { text: "Trauma"}],
            "activity": [{ text: "Limit exposure to cold environments" }],
            "protocol": ["Cold without Criteria for Hypothermia: move to warm area, remove wet clothes, and rewarm through body heat and space/hypothermia blanket. Monitor closely and elevate care if not improving within 30 minutes."]
        }
    ],
    immersionfoot:[
        {
            "partial": [{ text: "Nonfreezing Cold Injury" }, { text: "Cold Urticaria" }, { text: "Raynaud Phenomenon" }, { text: "Frostbite" }],
            "flags": [{ text: "Gangrene/Necrosis" }, { text: "Hemorrhagic Blisters" }, { text: "Hypothermia" }, { text: "Frostbite" }, { text: "Trauma"}],
            "activity": [{ text: "-Limit activities for 3 days<br/>Elevate affected extremity x 3 days" }],
            "protocol": ["Rest, elevate, and air dry affected extremity at room temperature. Limit activities for 3 days.<br/>Rehydrate with warm IVF, Tetanus prophylaxis (AEM approval required). Toradol for moderate pain. Ibuprofen as needed for minor pain. Amitryptyline at night as needed for pain (provider prescription required).<br/>RTC if symptoms are worsening, signs of infection, new symptoms develop, or symptoms are not controlled with the MCP not improving after 1 week."]
        }
    ],
    chappedskinwindburn:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Cover affected skin area. Apply moisturizing lotion to affected area. Apply petroleum jelly or lip balm to the lips, if needed.<br/>RTC if symptoms are worsening, signs of infection, or new symptoms develop."]
        }
    ],
    frostbite:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Pad or splint the affected area. Move Soldier to warm area. Remove wet clothing. Rewarm using body heat and space/hypothermia blanket. Do not rub area, place area near fire/heating element, or rewarm area if chance of refreezing. Tetanus prophylaxis."]
        }
    ],
    crabslicepediculosis:[
        {
            "partial": [{ text: "Lice" }, { text: "Scabies" }, { text: "Contact Dermatitis" }, { text: "Fungal Infection" }, { text: "Hair Casts" }],
            "flags": [{ text: "None" }],
            "activity": [{ text: "None" }],
            "protocol": ["Launder clothes and bed linens in hot water<br/>Body lice: apply permethrin 5% cream to body.<br/>Head lice: wash hair without conditioner and towel dry. Apply permethrin 1% cream. Leave on for 10 minutes. Rinse with warm water. Remove nits and dead lice with thin toothed comb.<br/>Pubis lice: screen for other STDs. Treat sexual partners at same time. Apply permethrin 1% cream to cool, dry areas (groin, buttock, upper thighs, trunk, axillae) for 10 minutes. Rinse with warm water. follow-up in 10 days for repeat evaluation."]
        }
    ],
    insectbitesnotcrabslice:[
        {
            "partial": [{ text: "Insect Bite" }, { text: "Skin Infection" }, { text: "Contact Dermititis" }],
            "flags": [{ text: "Swelling of Lips or Tongue" }, { text: "Trouble Breathing" }, { text: "Abnormal Vital Signs" }],
            "activity": [{ text: "None" }],
            "protocol": ["Remove any stinger, head of tick, or other biting apparatus. Clean site with betadine solution.<br/>Apply calamine lotion or hydrocortisone 1% cream every 6 hours as needed for itching. Apply an ice pack as needed for swelling.<br/>RTC if symptoms worsen, new symptoms develop, or symptoms are not improving within 48 hours."]
        }
    ],
    screeningforoverseaspcs:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Not Applicable"]
        }
    ],
    weightreduction:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Individuals who come on sick call requesting assistance with weight control or diet therapy to reduce their weight should be seen by a dietitian if there are no medical problems that require evaluation."]
        }
    ],
    complaintnotonthelist:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Not Applicable"]
        }
    ],
    requestfornonprescriptionortravelingmedications:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Supervising privileged provider must approve all travel medications."]
        }
    ],
    nosignsofimprovement:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Soldier should not be screened to below the AEM level when he or she returns to the clinic for the same issue that was previously treated with minor-care.  Soldier has the option to elevate his or her disposition to the next higher level (Provider Now) if he or she feels uncomfortable with seeing an AEM."]
        }
    ],
    returnrequestedbyprovider:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Write the previous level of care and name of the privileged provider on the screening note."]
        }
    ],
    neck:[
        {
            "partial": [{ text: "Muscle Strain" }, { text: "Fracture" }, { text: "Meningitis" }, { text: "Flu" }, { text: "Deep neck space infection" }],
            "flags": [{ text: "Bony step off/midline tenderness to palpation inability to flex neck" }, { text: "Fever" }, { text: "Recent HEENT or dental infection" }, { text: "Gross Hematuria or Passing Blood Clots" }],
            "activity": [{ text: "No rucking or jumping" }, { text: "Consider limiting Kevlar use" }, {text: "Restrict driving if limited ROM" }, {text: "Perform stretching, core strengthening home regiment during PT"}],
            "protocol": ["Provide home exercise program. Activity modification as appropriate <br/> Intermittent ice or heat as needed for inflammation <br/> Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed <br/> Refer to PT if direct access is available <br/> Follow-up: Immediate follow-up for a DP1 or DP2 symptoms. Routine follow-up is recommended for any symptoms that do not improve or worsen. Return to clinic if symptoms not improving within 24 hours, development of new symptoms, worsening symptoms."]
        }
    ],
    shoulder:[
        {
            "partial": [{ text: "Tendon inflammation/tear" }, { text: "Instability (dislocation)" }, { text: "Arthritis" }, { text: "Fracture" }, { text: "Myocardial Infarction" }],
            "flags": [{ text: "Distal Pulses Abnormal" }, { text: "Distal Sensation Abnormal" }, { text: "Deformity" }, { text: "Cardiac Symptoms" }],
            "activity": [{ text: "May lift, push, pull up to 5 lbs" }, { text: "No overhead lifting or repetitive activities"}, { text: "Perform stretching, core strengthening home regiment during PT"}],
            "protocol": ["Provide home exercise program. Activity modification as appropriate <br/> Intermittent ice or heat for inflammation <br/> Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed <br/> Refer to PT if direct access is available <br/> Follow-up: Immediate follow-up for a DP1 or DP2 symptoms. Routine follow-up is recommended for any symptoms that do not improve or worsen. Return to clinic if symptoms not improving within 24 hours, development of new symptoms, worsening symptoms."]
        }
    ],
    elbow:[
        {
            "partial": [{ text: "Muscle strain" }, { text: "Fracture" }, { text: "Dislocation" }, { text: "Tendonitis" }, { text: "Bursitis" }],
            "flags": [{ text: "Distal Pulses Abnormal" }, { text: "Distal Sensation Abnormal" }, { text: "Deformity" }],
            "activity": [{ text: "May lift, push, pull up to 5 lbs" }, { text: "No repetitive bending of elbow or turning/ bending of wrist"}, { text: "Perform stretching, core strengthening home regiment during PT"}],
            "protocol": ["Provide home exercise program. Activity modification as appropriate <br/> Intermittent ice and heat for inflammation <br/> Medication: analgesic balm for mild pain, ibuprofen (1st line) and ketorolac (2nd line) for moderate pain as needed <br/> Refer to PT if direct access is available <br/> Follow-up: Immediate follow up for a DP1 or DP2 symptoms. Routine follow-up is recommended for any symptoms that do not improve or worsen."]
        }
    ],
    hand:[
        {
            "partial": [{ text: "Fracture/ Dislocation" }, { text: "Gout" }, { text: "Carpal Tunnel Syndrome" }, { text: "Arthritis" }, { text: "Tendonitis" }, { text: "Muscle Strain" }],
            "flags": [{ text: "Abnormal Capillary Refill" }, { text: "Abnormal Distal Sensation" }, { text: "Palmar Infection" }, { text: "Deformity" }, { text: " Significant Burn"}],
            "activity": [{ text: "Paronychia Keep area clean and dry <br,>"}, { text: "Sprained Finger May lift,  push pull up to 5 lbs. May tape or brace comfort. No contact sports" }],
            "protocol": ["Paronychia: 10-15min warm soaks 3 times per day and topical antibiotic cream after each soak. Ibuprofen (1st line) or acetaminophen (2nd line) as needed for pain. Ketorolac (3rd line) can be used once on presentation for moderate pain. Return if worsening, Spreading redness, abscess formation, not improving in 2 days. <br/> Sprained finger: activity modification as appropriate. Intermittent ice for swelling, ibuprofen (1st line) or acetaminophen (2nd line) as needed for pain. Splint to adjacent finger. Return if worsening or not improving."]
        }
    ],
    diarrhea:[
        {
            "partial": [{ text: "Food Intolerance" }, { text: "Medication" }, { text: "Infection (Viral/Bacterial)" }, { text: "Dizziness" }, { text: "Chest Pain" }, { text: "Ear Pain" }, {text: "Heartburn"}],
            "flags": [{ text: "Vomiting Blood or Coffee Grinds, Melena " }, { text: "Severe Abdominal Pain" }, { text: "Significant weight loss" }],
            "activity": [{ text: "No food handling, if work in a DFAC, until symptoms have resolved x 48 hours" }],
            "protocol": ["Medication: bismuth subsalicylate (1st line) as needed, discuss with provider before giving Imodium <br/> Initiate a clear liquid diet with broth, sports drinks, clear non-caffeine soft drinks, fruit juice, ice chips to maintain calories and hydration. When diarrhea controlled start BRAT diet of simple carbohydrates. <br/> Return to clinic if not improved in 1 week or any of the red flags or other symptoms develop"]
        }
    ],
    abdominalandflank:[
        {
            "partial": [{ text: "MI,AAA" }, { text: "Appendicitis" }, { text: "Pancreatitis, Hepatitis" }, { text: "Heartburn" }, { text: "Ectopic Pregnancy" }, { text: "Testicular Torsion" }, { text: "Pelvic inflammatory Disease"}],
            "flags": [{ text: "Abnormal Vitals" }, { text: "Abdominal rigidity/rebound (bump chair)" }, { text: "Severe pain" }, { text: "Fever with jaundice and RUQ pain" }, { text: "Confirmed Pregnancy"}, { text: "Alcoholism"}, { text: "Immunocompromised"}, { text: "RLQ Pain"}],
            "activity": [{ text: "No running, jumping, riding in vehicle over uneven terrain" }, { text: "Aerobic activity at own pace/ distance"}, { text: "Abdominal training at own intensity/ rep"}],
            "protocol": ["Initiate hydration with 8 glasses of water per day and a well balanced, high fiber diet. <br/> Maintain a food diary to see if the symptoms are related to a particular food. <br/> Follow-up in 3 days if the symptoms have not resolved or earlier symptoms worsen, new symptoms develop, or red flags become present"]
        }
    ],
    rectalpainitchingbleeding:[
        {
            "partial": [{ text: "Gastrointestinal Bleed" }, { text: "Cancer" }, { text: "Infection" }, { text: "IBD" }, { text: "Hemorrhoid/Fissure" }],
            "flags": [{ text: "Toilette FULL of Blood" }, { text: "Flank Pain" }, { text: "Vomiting Blood or Coffee Grinds" }, { text: "Melena" }, { text: "Lightheaded"}],
            "activity": [{ text: "- None" }],
            "protocol": ["Sit in warm water for 30 min a day. Wash the area with warm water and blotting dry to keep clean. <br/> Drink 8 glasses of liquid a day and eat foods high in fiber. <br/> Medication: Polyethylene glycol (1st line) or docusate sodium (2nd line) can be used to soften the stool, and hydrocortisone and pramoxine cream (3rd line) can be used if needed for inflammation and pain <br/> Return to clinic in 1 week, symptoms worsen, or new symptoms develop"]
        }
    ],
    grointesticularpainorurethraldischarge:[
        {
            "partial": [{ text: " Testicular Torsion" }, { text: "Hernia" }, { text: "Muscle/Tendon Strain" }, { text: "Stress Fracture" }, { text: "Hip injury" }],
            "flags": [{ text: "Pain with testes supported" }, { text: "Suspect Stress Fracture (increased with weight bearing or during exercise, endurance training, change in exercise routine)" }, { text: "Severe Pain" }],
            "activity": [{ text: "Epididymitis" }, { text: "Walk at own pace/distance"}, { text: "- No running, jumping, riding in military vehicle over uneven terrain"}, { text: "May stand for up to 15min"}],
            "protocol": ["MCP for MSK <br/> Provide home exercise program, intermittent ice or heat IAW local protocol if worse with activity <br/> MCP for Epididymitis <br/> Intermittent ice and testicular support if improved with support <br/> Activity modification as appropriate <br/> Medication: ibuprofen (1st line) and ketorolac (2nd line) as needed for moderate pain <br/> Provide screening, treatment and counseling if present with urologic symptoms. <br/> RTC if worsening pain, new symptoms arise, or not improved within 1 week after treatment. Notify provider. Refer to community health. <br/> RTC if symptoms are not improving within 48 hours. development of new symptoms or worsening symptoms.\
            <br/>MCP for Urethral Discharge<br/>Provide screening, if urethral discharge is present, or recent known STI exposure, treat for potential Gonorrhea/Chlamydia infection with ceftriaxone and azithromycin.<br/>Instruct the Soldier that the condition is contagious and to abstain from intercourse for 1 week after treatment. Notify provider. Refer to community health.<br/>RTC if symptoms are not improving within 48 hours, development of new symptoms or worsening symptoms."]
        }
    ],
    dizzinessfaintnessblackout:[
        {
            "partial": [{ text: " Orthostatic Hypotension" }, { text: "Vasovagal Syncope" }, { text: "Vertigo" }, { text: "Anxiety" }, { text: "Heart Arrhythmia" }, { text: "Intracranial Bleed" }, { text: "Seizure, Drugs, Alcohol"}],
            "flags": [{ text: "Abnormal Vital signs" }, { text: "Irregular Pulse" }, { text: "Witnessed or H/O seizure" }, { text: "Severe Headache" }, { text: "Heat Injury"}],
            "activity": [{ text: "No Driving x 72 hours" }],
            "protocol": ["Reflex syncope situation/symptoms before incident. Have the patient lay down with legs uncrossed and elevated until symptoms resolve. Observe the patient for 30 minutes after symptoms resolved to make sure that the symptoms do not return. Counsel the patient to increase electrolyte intake. Counsel the patient on situations that increase the risk of reoccurrence, symptoms to watch for, and early interventions to take. <br/> RTC if worsening symptoms, new symptoms arise, or recurrence of incident."]
        }
    ],
    headache:[
        {
            "partial": [{ text: "Migraine Headache" }, { text: "Tension Headache" }, { text: "Caffeine withdrawal" }, { text: "Infection/Meningitis" }, { text: "Intracranial Hemmorrhage" }],
            "flags": [{ text: "Sudden Onset, Severe" }, { text: "Focal Neurologic Signs" }, { text: "Blown pupil" }, { text: "Severe Hypertension" }, { text: "Fever"},{text: "Vision Change/Loss"}],
            "activity": [{ text: "May wear Sunglasses indoors<br/>Limit loud noises<br/>Walk at own pace/distance<br/>No running, rucking, jumping" }],
            "protocol": ["Headache: ibuprofen (1st line), acetaminophen (2nd line), toradol (3rd line) as needed for pain.<br/>Drink plenty of fluids. Get plenty of rest.<br/>Consider activity modifications to include ability to wear sunglasses for photophobia, limit loud noises, and limit physical activity as needed for migraines.<br/>Return to clinic if the headache lasts over 24 hours, worsens (confusion, vision problems, nausea, fever), or becomes so severe that it limits the Soldier's ability to perform their job."]
        }
    ],
    numbnesstinglingparalysisweakness:[
        {
            "partial": [{ text: "Viral Syndrome/Fatigue"}, {text: "Stroke" }, { text: "Nerve Compression" }, { text: "Hypoglycemia" }, { text: "Hyperventilation" }, { text: "Depression" }, { text: "Lyme disease" }],
            "flags": [{ text: "Localized to a Region or 1 sided" }, { text: "Recent Trauma" }, { text: "Loss of Consciousness" }, { text: "Bowel/Bladder Incontinence" }],
            "activity": [{ text: "Activity Modification: Insomnia" }, { text: "Allow for 8 hours of uninterrupted sleep in 24 hour period"}, { text: "Viral Syndrome"}, { text: "PT training at own pace/rep/distance x 3 days"}],
            "protocol": ["Hyperventilation: respiratory rate greater than 14 per minute. Provide reassurance to the patient. Have the Soldier practice relaxed breathing. If symptoms resolve, refer to behavioral health if available. <br/> Viral Syndrome: ibuprofen as needed for fatigue/body aches. Drink plenty of water. Get plenty of sleep.  <br/> Insomnia/Fatigue/Stress: provide sleep hygiene education, recommend self-reflection to find a way to relieve stress, and offer a routine referral to a routine behavioral health asset, if available <br/> Return to clinic if not improving, new symptoms arise, or symptoms are worsening."]
        }
    ],
    fatigue:[
        {
            "partial": [{ text: "Sleep Debt" }, { text: "Sleep Apnea" }, { text: "Anemia" }, { text: "Anxiety Disorders" }, { text: "Chronic Infection/Inflammation" }, { text: "Chronic fatigue syndrome" }, { text: "Acute liver failure"}],
            "flags": [{ text: "Suicide Ideation" }, { text: "Homicide Ideation" }, { text: "Shortness of Breath" }, { text: "Stiff Neck" }, { text: "Melena"}],
            "activity": [{ text: "Allow for 8 hours of uninterrupted sleep with a 24 hour period" }],
            "protocol": ["OTC Medication: Diphenhydramine to assist with sleep if needed <br/> Referral: Wellness Center for relaxation exercises for stress, ACS for anger management, Behavioral Health or Chaplain for stress or support <br/> Return if not improving in 1 week or immediately if Red Flags, development of new symptoms, or inability to perform daily activities."]
        }
    ],
    breastproblems:[
        {
            "partial": [{ text: "Cyclical Breast Pain" }, { text: "Musculoskeletal Issue" }, { text: "Large Breasts" }, { text: "Mastitis, Abscess" }, { text: "Cancer" }, ],
            "flags": [{ text: "Skin Changes" }, { text: "Mass" }, { text: "Bloody Nipple Discharge" }, ],
            "activity": [{ text: "No running, jumping, rucking" }, { text: "Walk at own pace/distance"}, { text: "May lift, carry, push up to 25 lbs"}],
            "protocol": ["Large breasts: educate the patient on the importance of physical support (well-fitting bra). Ice/heat (1st line) or acetaminophen (2nd line) as needed for mild pain. Ibuprofen (1st line) or ketorolac (2nd line) as needed for moderate pain. <br/> Extramammary/ Musculoskeletal pain: ice/heat for inflammation, methyl salicylate (1st line) or acetaminophen (2nd line) as needed for mild pain, ibuprofen (1st line) or ketorolac (2nd line) as needed for moderate pain. Activity modifications as needed. <br/> Female diffuse breast pain: ice/heat for inflammation, methyl salicylate (1st line) or acetaminophen (2nd line) as needed for mild pain. Ibuprofen(1st line) or ketorolac (2nd line) as needed for moderate pain. Provide reassurance. Refer to provider if Soldier is concerned about risk of breast cancer after reassurance. <br/> RTC if not improving within 3 days, worsening symptoms, or development of new symptoms."]
        }
    ],
    suspectspregnancy:[
        {
            "partial": [{ text: "Irregular Menstrual Cycle" }, { text: "Pregnancy" }],
            "flags": [{ text: "Positive hCG AND" }, { text: "Pelvic Pain" }, { text: "H/O Ectopic Pregnancy" }, { text: "Vaginal Bleeding" }],
            "activity": [{ text: "None" }],
            "protocol": ["Counsel the Soldier to avoid alcohol and NSAID medications <br/>return to clinic in 1 week if she still has not had a cycle"]
        }
    ],
    menstrualproblemsvaginalbleeding:[
        {
            "partial": [{ text: "Heavy Menstrual Cycle" }, { text: "Irregular Menstrual Cycle" }, { text: "Birth Control Side Effect" }, { text: "Miscarriage" }, { text: "Ectopic Pregnancy" }],
            "flags": [{ text: "Sexual Assault" }, { text: "Trauma" }, { text: "Severe Pain" }, { text: "Pregnant" }],
            "activity": [{ text: "Aerobic exercise at own pace/distance x3 days <br/> Must have access to restroom every hour" }],
            "protocol": ["Menstrual Cramps: provide NSAID like naproxen or ibuprofen as needed for pain to be taken with food for up to 7 days. Toradol as a 1x dose for moderate pain. A warm compress may also be placed over the abdomen to help with discomfort. <br/> RTC if symptoms are worsening, new symptoms develop, or symptoms are not controlled with the MCP"]
        }
    ],
    vaginaldischargeitchingirritationpain:[
        {
            "partial": [{ text: "Bacterial Vaginosis" }, { text: "Yeast Infection" }, { text: "Trichomonas" }, { text: "Pelvic Inflammatory Disease" }, { text: "STI" }],
            "flags": [{ text: "Fever" }, { text: "Pregnant" }, { text: "Non-midline Pelvic Pain" }, { text: "Pain with Intercourse" }],
            "activity": [{ text: "None" }],
            "protocol": ["Yeast Infection: treat with fluconazole. <br/> Bacterial Vaginosis: treat with metronidazole for 7 days. <br/> RTC if symptoms are worsening, new symptoms develop, or MCP does not resolve symptoms"]
        }
    ],
    requestforpap:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": [" Confirm the current USPSTF standards. Initial pap smear should be performed starting at 21 years old. Schedule appointment."]
        }
    ],
    requestforinfooncontraception:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Contraception provides prevention of unintended pregnancy.  There are many different types of contraception depending on the Soldier&#39;s goals. Schedule appointment or referral."]
        }
    ],
    unknowncauseofskindisordercomplaint:[
        {
            "partial": [{ text: "Eczema" }, { text: "Hives" }, { text: "Contact Dermatitis" }, { text: "Athlete's Foot" }, { text: "Heat Rash" }, { text: "Drug Reaction" }],
            "flags": [{ text: "Airway Compromise/ Swelling" }],
            "activity": [{ text: "Keep area clean and dry" }],
            "protocol": ["Continue the current skin treatment regimen if it has not been completed/followed for the necessary amount of time (usually 2-3 weeks) <br/> Screen according to pertinent algorithm if you can identify the skin condition. <br/> Refer to AEM for further evaluation if you cannot identify the skin condition."]
        }
    ],
    acne:[
        {
            "partial": [{ text: "Acne Vulgaris" }, { text: "Pseudofolliculitis Barbae" }, { text: "Folliculitis" }, { text: "Acne Rosacea" }, { text: "Hyperandrogenism" }],
            "flags": [{ text: "None" }],
            "activity": [{ text: "None" }],
            "protocol": ["For comedones, confirm a negative pregnancy test (if female) and no fish allergy. Instruct the soldier to apply a pea sized amount of medication to the affected area of a dry face at night. Counsel to decrease to every other night if dry skin occurs . <br/> For mild to moderate inflammation, add topical combination of benzyl peroxide and antibiotics in the morning to the retinoid used at night. <br/> RTC if symptoms are worsening, new symptoms develop, or symptoms are not controlled with the MCP within 2 weeks."]
        }
    ],
    shavingproblempseudofolliculitisbarbae:[
        {
            "partial": [{ text: "Acne " }, { text: "Pseudofolliculitis Barbae" }, { text: "Folliculitis" }, { text: " Tinea Barbae" }, { text: "Acne Keloidalis Nuchae" }],
            "flags": [{ text: "Facial Cellulitis" }],
            "activity": [{ text: "Shaving profile in eProfile" }],
            "protocol": ["Counsel the Soldier on shaving routine modification to include washing the face in a circular motion, warm compress and leaving shaving cream on for 5 min prior to shaving, and using a single blade razor <br/> Topical retinoid with or without a low potency steroid can be used once a day at night as an adjunct. <br/> RTC if symptoms are worsening, new symptoms develop, or symptoms are not controlled with the MCP"]
        }
    ],
    dandruff:[
        {
            "partial": [{ text: "Pemphigus Foliaceus" }, { text: "Tinea Capitis" }, { text: "Psoriasis" }, { text: "Allergic Contact Dermatitis"}, {text: "Seborrheic Dermatitis"}],
            "flags": [{ text: "Scaling with Visible Inflammation" }, { text: "Abnormal Sensation" }, { text: "Painful Erosions" }],
            "activity": [{ text: "None" }],
            "protocol": ["Antifungal shampoo used daily (2-3 times per week minimal) for several weeks and remission is achieved. <br/> Manage stress levels <br/> Spend time (a few minutes) outdoors in the sun (DO NOT sunbathe). <br/> Return to Clinic if mild dandruff is still present after 3-4 weeks of antifungal shampoo use, symptoms worsen, or new symptoms begin."]
        }
    ],
    hairloss:[
        {
            "partial": [{ text: "Alopecia" }, { text: "Traction Hair Loss" }, { text: "Alopecia Areata" }, { text: "Tinea Capitis" }, { text: "Acne Keloidalis Nuchae"}],
            "flags": [{ text: "None" }],
            "activity": [{ text: "None" }],
            "protocol": ["Traction Hair Loss: Counsel soldier to avoid tight hair styles, chemical relaxants, and applying heat to hair until resolved. Refer to AEM for further evauluation if signs of inflammation are present. <br/> Male/female pattern hair loss (FPHL): discuss the suspected diagnosis with the AEM and then provide counseling to the patient <br/> RTC if symptoms worsen or new symptoms begin."]
        }
    ],
    athletesfoot:[
        {
            "partial": [{ text: "Interdigital tinea pedis" }, { text: "Hyperkeratotic (moccasin type) tinea pedis" }, { text: "Vesiculobullous (Inflammatory) tinea pedis" }],
            "flags": [{ text: "Diabetic Soldiers" }, { text: "Significant erosions/ulcerations or malodor in affected area" }, { text: "Soldiers w/weakened immune systems" }],
            "activity": [{ text: "None" }],
            "protocol": ["Antifungal lotion, ointment, powder or spray-applied twice a day for 4-8 weeks. <br/>  RTC if the fungal infection does not respond <br/><b>Prevention</b> <br/> Instruct Patient to keep their feet dry, change socks regularly, wear well ventilated shoes and provide feet protection in public places. Use antifungal powder daily, alternate shoes and do not share shoes."]
        }
    ],
    jockitch:[
        {
            "partial": [{ text: "Inverse psoriasis" }, { text: "Erythrasma" }, { text: "Seborrheic dermatitis" }],
            "flags": [{ text: "Diabetes" }, { text: "Immunodeficiency" }],
            "activity": [{ text: "None" }],
            "protocol": ["Topical antifungal medications twice a day for 2 weeks <br/> Instruct patient to keep groin area clean and dry and RTC if symptoms worsen, new symptoms develop, symptoms not improving within 2 weeks, or if the infection returns within a few weeks after using medications."]
        }
    ],
    scalingdepigmentedspotsonchestbackupperarms:[
        {
            "partial": [{ text: "Seborrheic dermatitis" }, { text: "Tinea corporis" }, { text: "Vitiligo" }, { text: "Secondary syphilis" }],
            "flags": [{ text: "None" }],
            "activity": [{ text: "None" }],
            "protocol": ["Topical antifungal medications twice a day for 1 week. <br/> Instruct patient that the hypo/hyper pigmented areas can remain for months after effective treatment. <br/> If the presentation is atypical, screen according to the identified lesion. If not able to identify the lesion, refer to the AEM for further evaluation and treatment. <br/> RTC for worsening symptoms, new symptoms, or presence of scale in the lesions after treatment"]
        }
    ],
    boils:[
        {
            "partial": [{ text: "Folliculitis" }, { text: "Abscess" }, { text: "Epidermal Cyst" }, { text: "Hidradenitis Suppurativa" }, { text: "Septic Joint" }],
            "flags": [{ text: "Location over Tailbone" }, { text: "SIRS Criteria" }, { text: "Worsening on Antibiotics" }, { text: "Palm of Hand" }, { text: "Over Joint"}, { text: "Black Eschar"}],
            "activity": [{ text: "None" }],
            "protocol": ["Apply a warm moist compress over the abscess for 20 minutes every four hours. <br/> RTC for worsening symptoms (fever/chills, re-accumulation of pus, increased pain/redness, red streaks, or increased swelling), new symptoms, if not improving within 3 days."]
        }
    ],
    feverblister:[
        {
            "partial": [{ text: "Cold Sore" }, { text: "Aphthous Ulcer" }, { text: "Epstein-Barr Virus" }, { text: "Syphilis" }],
            "flags": [{ text: "Eye Pain" }],
            "activity": [{ text: "None" }],
            "protocol": ["Counsel the Soldier on the contagious nature of the virus and to avoid sharing a drink or kissing anyone till it has resolved. <br/> Provide docosanol topical ointment (1st line) to be applied 5 x per day till cold sore is healed or valacyclovir (2nd line). <br/> RTC if symptoms worsen, new symptoms develop, or it is not improved within 10 days."]
        }
    ],
    skinabrasionlaceration:[
        {
            "partial": [{ text: "Abrasion" }, { text: "Laceration" }],
            "flags": [{ text: "SIRS Criteria" }, { text: "Animal Bite, Scratch" }],
            "activity": [{ text: "Keep area clean and dry" }],
            "protocol": ["Wash the area with soap and water. Ensure the area is thoroughly irrigated and all foreign material has been removed. Cover the area with an antibiotic ointment and sterile dressing. <br/> Provide materials for wound care. Counsel the Soldier on how to take care of the wound. <br/> RTC for increasing redness, bad smell, thick discharge, increasing tenderness, or other concerns."]
        }
    ],
    sutureremoval:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Fever" }, { text: "Pus/redness/swelling" }],
            "activity": [{ text: "None" }],
            "protocol": ["Bacitracin for the scar <br/> Protect the scar from the sun <br/> Wear sunscreen for three months to protect from discoloration "]
        }
    ],
    ///////////////////////////////////////////////come back to this one//////////////////////////////////////////
    drugrashcontactdermatitis:[
        {
            "partial": [{ text: "Hives" }, { text: "Contact Dermatitis" }, { text: "Viral Exanthem" }, { text: "Drug Rash" }],
            "flags": [{ text: "Airway Swelling" }, { text: "Wheezing" }, { text: "Anaphylaxis" }],
            "activity": [{ text: "None" }],
            "protocol": ["Hives are common, Counsel to avoid offending agent. Discuss with AEM and notify prescribing provider. Provide Benadryl three times a day for 3 days. <br/> Irritant contact dermatitis should be treated with avoidance and skin moisturizing lotion or cetaphil body wash with the addition of hydrocortisone ointment three times a day if needed for 1-2 weeks. <br/> Allergic contact dermatitis should be treated with avoidance, hydrocortisone ointment three a day as needed for 1-2 weeks, and Burrow's solution compresses every 4 hours for 30 minutes as needed. <br/> RTC for worsening symptoms, development of new symptoms, or other concerns."]
        }
    ],
    burnssunburn:[
        {
            "partial": [{ text: "Burn" }, { text: "Irritant Contact Dermatitis" }],
            "flags": [{ text: "Trouble Breathing" }, { text: "AMS, Drowsy" }, { text: "High Risk Location" }, { text: "Circumferential Burn" }],
            "activity": [{ text: "Keep area clean" }, { text: "Avoid additional heat exposure to area"}],
            "protocol": ["Apply cool compresses. Provide ibuprofen or acetaminophen as needed for pain. keep the area clean and uncovered. May recommend aloe vera for additional pain relief. <br/> RTC for worsening symptoms, new symptoms, if not improving within 3 days."]
        }
    ],
    frictionblistersonfeet:[
        {
            "partial": [{ text: "Corn" }, { text: "Stephen Johnson Syndrome" }, { text: "Staphylococcal scalded skin syndrome" }],
            "flags": [{ text: "Fever/malaise" }, { text: "Epidermal sloughing" }],
            "activity": [{ text: "No running, rucking, or jumping <br/> Walk at own pace/ distance" }],
            "protocol": ["Wash area with betadine and apply an antibacterial ointment to the blister only. <br/> Cover a large area of surrounding undamaged skin and the treated blister with a protective dressing of moleskin between treatments. An adhesive solution such as tincture of benzoin or a surgical adhesive may be applied to the skin around the blister to improve  the adhesion of the moleskin. <br/> Wear two pairs of socks while wearing combat boots (a thin pair of nonabsorbent, non-cotton socks under the boot socks) and to check for proper fit of boots. <br/> <br/> Instruct the patient to return for further evaluation if: <ul> <li>The protective dressing begins to come off.</li> <li>He develops blisters that make wearing shoes or boots impossible.</li> <li>He is disabled by pain.</li> <li>He has signs of infection.</li> </ul> <br/> The patient should be reevaluated every 24 hours"]
        }
    ],
    cornsonfeet:[
        {
            "partial": [{ text: "Callus" }, { text: "Plantar Wart" }, { text: "Corn" }, { text: "Bunion" }],
            "flags": [{ text: "None" }],
            "activity": [{ text: "No running, rucking, or jumping" }, { text: "Walk at own pace/ distance"}],
            "protocol": ["RTC if symptoms are worsening, new symptoms develop, or symptoms are not controlled with the MCP."]
        }
    ],
    cutaneouplantarswarts:[
        {
            "partial": [{ text: "Cutaneous Wart" }, { text: "Corn" }, { text: "Callous" }, { text: "Skin Cancer" }],
            "flags": [{ text: "None" }],
            "activity": [{ text: "On foot <br/> No running, rucking, or jumping"}, { text: "Walk at own pace/ distance"}],
            "protocol": ["Obtain approval for treatment from AEM. Counsel the soldier on options, risks, and course of treatment. <br/> Consent and Final Timeout. Clean area and pare down built-up skin. Cryotherapy-2 freeze thaw cycles, freezes the wart and 2mm around it with 30-60 seconds to thaw and/or salicylic acid. Salicylic acid is reapplied daily if using a bandage or every 2 days if using tape. <br/> RTC if new symptoms develop or in 2 weeks for next treatment."]
        }
    ],
    ingrowntoenail:[
        {
            "partial": [{ text: "Paronychia" }, { text: "Ingrown Toenail" }, { text: "Trauma" }, { text: "Cellulitis" }],
            "flags": [{ text: "Red Streaks up Foot" }, { text: "Gangrene" }, { text: "Black Eschar" }],
            "activity": [{ text: "No running, rucking, or jumping" }, { text: "Walk at own pace/distance"}],
            "protocol": ["Educate the soldier on proper trimming of toenail, allowing toenail to grow out, and proper fitting shoes. <br/> Soak foot in warm, soapy water for 15 minutes 3x/day. Place cotton piece or dental floss under lateral nail to separate from nail fold. Apply hydrocortisone cream 1% to dry inflamed area after soaks. <br/> Consider duty limitations for up to 3 days as needed. RTC if symptoms are worsening or symptoms are not improved after 1 week."]
        }
    ],
    exposedtohepatitisorhiv:[
        {
            "partial": [{ text: "Low Risk Exposure" }, { text: "High Risk Exposure" }],
            "flags": [{ text: "Known Infection" }, { text: "High Risk Contact" }],
            "activity": [{ text: "None" }],
            "protocol": ["Ensure the following information is documented in the Healthcare record before the patient leaves:<br/><br/><b>HCP</b> - The following information should be obtained from the injured HCP and verified from their medical/occupational health record:<br><ul><li>Dates of HepB immunizations</li><li>Post-immunization titer, if known</li><li>Previous testing (if available) for HBV and HCV</li><li>Tetanus immunization status</li><li>Current medications</li><li>Current or underlying medical conditions that might influence use of/response to vaccination</li></ul><br/><b>Exposure</b> - The following information regarding the exposure should be obtained: <br/> <ul><li>The date and time of the exposure</li> <li>Nature of the exposure (i.e., non-intact skin, mucosal, percutaneous, human bite)</li> <li>Type of fluid (i.e., blood contaminated fluid, or other contaminated fluid)</li> <li>Body location of the exposure and contact time with the contaminated fluid</li> <li>For Percutaneous injuries, a description of the injury (e.g., depth of the wound, solid versus hollow needle, sharp use in source patient)</li></ul>"]
        }
    ],
    dentalproblems:[
        {
            "partial": [{ text: "Tooth Cavity" }, { text: "Poor Dental Hygiene" }, { text: "Temporomandibular Joint Pain"},{text: "Infection" }, { text: "Heart Attack" }],
            "flags": [{ text: "Exposed Pulp" }, { text: "Avulsed Tooth" }, { text: "Severe Pain" }, { text: "Trauma" }, { text: "Chest Pain, SOB"}],
            "activity": [{ text: "None" }],
            "protocol": ["Furry Tongue- brush the tongue with toothpaste and a soft toothbrush 3 times per day. <br/> White Plaque (leukoplakia): counsel Soldier on importance of surveillance during yearly dental exams. If an indurated area is present, Soldier should be referred to a dentist now. <br/> Bad Breath: screen for causes of bad breath. Refer to provider or dentist if indicated. Otherwise, counsel on likely cause and importance of good oral hygiene. RTC if not improving within 1 week or new symptoms develop."]
        }
    ],
    soresinthemouth:[
        {
            "partial": [{ text: "Aphthous Ulcers" }, { text: "Herpes Simplex Virus" }, { text: "Hand, Foot, and Mouth Disease" }, { text: "Stevens Johnson Syndrome" }],
            "flags": [{ text: "Diffuse" }, { text: "Bloody Diarrhea" }],
            "activity": [{ text: "None" }],
            "protocol": ["Aphthous Ulcer: apply 1/4 inch of triamcinolone acetate oral paste to the ulcer at bedtime. It should resolve in 10-14 days. <br/> Hand, Foot, and Mouth Disease presents with lesions on the palms and soles of the feet. Provide toradol, acetaminophen every 6 hours as needed for fever, ibuprofen every 6 hours as needed for malaise, and lozenges or lidocaine gargle as needed for sore throat. <br/> RTC if symptoms are worsening, new symptoms develop, or symptoms are not controlled with the MCP or resolved within 2 weeks"]
        }
    ],
    prescriptionrefill:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Soldiers are normally given enough medication initially to cover the anticipated period of illness.  If the Soldier wants additional medication, the illness may not be responding to the treatment as expected.  In this case, the Soldier needs to be rescreened by his complaints.  The only exception would be the Soldier who lost his original prescription."]        
        }
    ],
    ////////////////////////////////////////no bx for Prescription Refill////////////////////////////////
    requestsvasectomy: [
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Not Applicable"]
        }
    ],
    needsimmunization:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["If you don't have the immunization, refer to the appropriate location (readiness clinic, immunization, etc.) <br/> Obtain approval from the AEM. Counsel the patient on the vaccine. Confirm no contradictions. <br/> Provide the vaccine according to the package insert. Document the vaccination information in the required databases or follow local policy to have it documented. <br/> RTC if symptoms develop after the vaccine to include redness or infection at vaccine site, rash, anaphylaxis, seizure, or any other serious symptoms."]
        }
    ],
    lymphnodeenlargement:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Not Applicable"]
        }
    ],
    bloodpressurecheck:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Not Applicable"]
        }
    ],
    screeningforoverseaspcs:[
        {
            "partial": [{ text: "Not Applicable" }],
            "flags": [{ text: "Not Applicable" }],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["Not Applicable"]
        }
    ],
    covid19:[
        {
            "partial": [{ text: "Asthma" },{ text: "Chronic lung disease" },{ text: "Serious heart condition" },{ text: "Weakened ability to cough" }],
            "flags": [{ text: "Fever or Chills"}, { text: "Cough"}, { text: "Shortness of breath or difficulty breathing"}, { text: "Fatigue"},{ text: "Muscle or body aches"}, {text: "Headache"}, {text: "New loss of taste or smell"}, {text: "Sore throat"}, {text: "Congestion or runny nose"}, {text: "Nausea or vomiting"}, {text: "Diarrhea"}],
            "activity": [{ text: "Not Applicable" }],
            "protocol": ["When in public:<br/><ul><li>Don't gather in groups</li><li>Avoid crowded places</li><li>Wear a cloth face covering</li></ul>"]
        }
    ]        

}