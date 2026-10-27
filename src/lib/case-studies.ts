import { ILLUSTRATIVE_OUTCOME } from "@/lib/site";
import type { SectorSlug } from "@/lib/sectors";

export type CaseStudy = {
  id: string;
  sector: SectorSlug;
  title: string;
  category: string;
  challenge: string;
  solution: string;
  disciplines: string[];
  tools: string[];
  collaboration: string;
  deliverables: string[];
  outcome: string;
};

const outcome = ILLUSTRATIVE_OUTCOME;

export const caseStudies: CaseStudy[] = [
  {
    id: "sw-automation",
    sector: "software",
    title: "AI-assisted business process",
    category: "Business process automation",
    challenge:
      "Staff retype the same facts from email into a spreadsheet and then into a system of record. Mistakes surface after a customer has already been told the wrong status.",
    solution:
      "Map the path of one transaction, separate the steps a rule can prepare from the steps a person must approve, and keep a record of what the model was allowed to see.",
    disciplines: ["Process analysis", "Software engineering", "Data handling", "Quality review"],
    tools: ["Workflow orchestration", "An existing business API", "A human review queue", "A written evaluation set"],
    collaboration:
      "One member documents the business rules with the operator of the process. A second builds the integration. A third reviews failures before anyone calls the flow reliable.",
    deliverables: ["Process map", "Decision rules", "Data-handling limits", "Review checklist"],
    outcome,
  },
  {
    id: "sw-enterprise",
    sector: "software",
    title: "Enterprise web application",
    category: "Product engineering",
    challenge:
      "An internal tool has outgrown the spreadsheet it replaced. New users cannot tell which number is official, and access is shared more widely than the data owner intended.",
    solution:
      "Define the system of record, design role-based access, and rebuild the workflow as a web application with an audit trail for sensitive changes.",
    disciplines: ["Product definition", "Full-stack engineering", "Security review", "Accessibility"],
    tools: ["TypeScript web stack", "Relational database", "Role-based access", "WCAG-oriented interface review"],
    collaboration:
      "A client-facing engineer holds the requirements. A second owns the data model. Review of authorization rules is a separate task, not a last-hour glance.",
    deliverables: ["Role matrix", "Application increment", "Access model", "Handoff notes"],
    outcome,
  },
  {
    id: "sw-mobile",
    sector: "software",
    title: "Mobile application modernization",
    category: "Mobile engineering",
    challenge:
      "A released mobile app no longer matches the backend, and small fixes require a developer who remembers decisions that were never written down.",
    solution:
      "Inventory the screens that still matter, pin the API contract, and replace the fragile paths first while keeping a release the current users can still open.",
    disciplines: ["Mobile engineering", "API design", "Quality assurance", "Release management"],
    tools: ["iOS and Android clients", "Versioned API", "Test devices", "Crash and release notes"],
    collaboration:
      "One engineer stays with the mobile client. Another owns the contract on the server. A third runs the regression list the client helped write.",
    deliverables: ["API contract", "Modernized flows", "Regression list", "Release notes"],
    outcome,
  },
  {
    id: "sw-security",
    sector: "software",
    title: "Cybersecurity improvement plan",
    category: "Defensive security",
    challenge:
      "A growing software team cannot explain, in one place, which systems they have, who can reach them, and what they would do on a bad day.",
    solution:
      "Use the NIST Cybersecurity Framework 2.0 functions as a shared vocabulary. Record the current posture, choose a small set of gaps, and assign an owner to each improvement.",
    disciplines: ["Security engineering", "Infrastructure", "Governance", "Incident preparation"],
    tools: ["Asset inventory", "Identity and access review", "Logging", "A written response outline"],
    collaboration:
      "The security-focused member leads the assessment. The engineer who runs the system confirms what is actually deployed. Nothing is described as fixed until that person agrees.",
    deliverables: ["Current-profile notes", "Prioritized gaps", "Access changes", "Response outline"],
    outcome,
  },
  {
    id: "sw-chat",
    sector: "software",
    title: "Customer support assistant",
    category: "AI integration",
    challenge:
      "Support staff answer the same policy questions, and a proposed chatbot has no rule for when it must stop and hand the conversation to a person.",
    solution:
      "Limit the assistant to approved source material, show the source it used, and route anything about billing, safety, or an angry customer to a human queue.",
    disciplines: ["Conversation design", "Software engineering", "Privacy review", "Support operations"],
    tools: ["Retrieval over approved articles", "Handoff queue", "Logging with a retention limit", "Evaluation prompts"],
    collaboration:
      "Support leads write what the assistant may say. An engineer builds the retrieval and the handoff. A reviewer samples conversations before a wider release.",
    deliverables: ["Source list", "Handoff rules", "Assistant increment", "Sample review"],
    outcome,
  },
  {
    id: "hw-drone",
    sector: "hardware",
    title: "Drone flight-control integration",
    category: "Unmanned aircraft",
    challenge:
      "A prototype aircraft has a frame, a controller, and a software engineer, but no shared picture of who owns flight dynamics, wiring, and the legal right to test outdoors.",
    solution:
      "Split the vehicle, the electronics, the flight software, and the Part 107 operating question into separate work packages with one qualified owner each.",
    disciplines: ["Aerospace engineering", "Electronics", "Embedded software", "Remote pilot operations"],
    tools: ["Flight controller", "CAD for the airframe", "Ground-test log", "FAA Part 107 operating constraints"],
    collaboration:
      "The aerospace member defines the flight envelope to be discussed. The electronics member owns the integration. Outdoor flights, if any, wait for a certificated remote pilot and the applicable airspace rules.",
    deliverables: ["Interface list", "Ground-test plan", "Software boundary", "Operations constraints"],
    outcome,
  },
  {
    id: "hw-enclosure",
    sector: "hardware",
    title: "Custom electronic enclosure",
    category: "Product hardware",
    challenge:
      "A board that works on a bench overheats, or lets in dust, once it is placed in a housing that was drawn without the electrical designer.",
    solution:
      "Design the enclosure around the real board, the connectors, the heat path, and an IP rating the product owner actually needs, then check it against how the part will be manufactured.",
    disciplines: ["Mechanical design", "Electronics", "Industrial design", "Manufacturing review"],
    tools: ["CAD", "Thermal considerations", "IEC 60529 IP codes as a specification language", "Prototype fit check"],
    collaboration:
      "Mechanical and electronics members review the same model. A manufacturing-aware reviewer looks at fasteners, draft, and service access before a tool is cut.",
    deliverables: ["Enclosure model", "Interface drawing", "Target IP discussion", "Fit-check notes"],
    outcome,
  },
  {
    id: "hw-embedded",
    sector: "hardware",
    title: "Embedded controller prototype",
    category: "Embedded systems",
    challenge:
      "Firmware is being written against a pinout that keeps changing, and no one can reproduce the last bench result.",
    solution:
      "Freeze a prototype schematic, bring up one subsystem at a time, and keep a lab note that pairs each firmware build with the board revision it ran on.",
    disciplines: ["Electronics", "Firmware", "Test"],
    tools: ["Microcontroller", "Schematic and layout", "Serial logs", "Revision-controlled firmware"],
    collaboration:
      "The board designer owns the schematic. The firmware engineer owns bring-up. They share a single issue list instead of two parallel stories about the same bug.",
    deliverables: ["Prototype schematic", "Bring-up log", "Firmware revision", "Open issue list"],
    outcome,
  },
  {
    id: "hw-robot",
    sector: "hardware",
    title: "Robotic automation concept",
    category: "Industrial automation",
    challenge:
      "A workcell is being discussed as a robot purchase before anyone has defined the human tasks, the stops, or the standard the safety case would have to meet.",
    solution:
      "Describe the operation, the hazards, and the mechanical concept first. Treat ISO 10218 as a reference for industrial robot safety, and leave the formal safety assessment to the qualified people a real installation requires.",
    disciplines: ["Mechanical engineering", "Controls", "Safety planning", "Software"],
    tools: ["Cell layout", "Cycle-time sketch", "Control architecture", "Hazard list"],
    collaboration:
      "A mechanical designer, a controls engineer, and a software engineer each mark the assumptions they are not willing to own. The client sees that list before hardware is ordered.",
    deliverables: ["Concept layout", "Hazard list", "Controls outline", "Assumptions log"],
    outcome,
  },
  {
    id: "hw-fea",
    sector: "hardware",
    title: "CAD and simulation check",
    category: "Mechanical analysis",
    challenge:
      "A part looks acceptable in a color plot, and the team is about to treat that picture as proof it will survive the real load.",
    solution:
      "State the geometry, material, supports, and loads. Run the study. Then have a qualified engineer check whether the model represents the part that will be built.",
    disciplines: ["Mechanical design", "Simulation", "Design review"],
    tools: ["CAD", "Finite element analysis", "Hand calculation for a simple check", "Drawing revision"],
    collaboration:
      "The person who builds the model is not the only person who accepts it. A second engineer reviews the setup. Neither person calls the plot a certification.",
    deliverables: ["Model assumptions", "Study files", "Review notes", "Updated drawing"],
    outcome,
  },
  {
    id: "cv-addition",
    sector: "civil",
    title: "Residential addition coordination",
    category: "Residential buildings",
    challenge:
      "An addition needs architectural drawings, a structural path for the new loads, a foundation concept, and a check that the existing house can accept the change.",
    solution:
      "Separate drafting, structural calculations, and foundation design. The licensed engineer in responsible charge reviews and, where appropriate, signs only the work they accept.",
    disciplines: ["Structural engineering", "Architectural coordination", "Drafting"],
    tools: ["CAD or BIM", "Structural analysis software", "The locally adopted building code"],
    collaboration:
      "A drafter and a structural engineer work from the same grid. The engineer does not seal a sheet they did not review. The client is told who the engineer of record is.",
    deliverables: ["Coordination set", "Calculation package", "Review comments", "Seal policy for the project"],
    outcome,
  },
  {
    id: "cv-commercial",
    sector: "civil",
    title: "Commercial structural analysis",
    category: "Commercial structures",
    challenge:
      "A commercial condition falls outside the residential practice of the engineer who was first contacted. Gravity, lateral load, and the local code edition all need a deliberate owner.",
    solution:
      "Confirm the adopted code and load standard, including ASCE/SEI 7 where it has been adopted, and staff the analysis with an engineer qualified for that building type.",
    disciplines: ["Structural engineering", "Code research", "Quality review"],
    tools: ["Analysis model", "Load criteria", "Independent calculation check"],
    collaboration:
      "The originating engineer keeps the client relationship and the parts of the building they are qualified to design. A colleague takes the specialized analysis under their own responsible charge.",
    deliverables: ["Criteria summary", "Analysis", "Check notes", "Clear division of seals"],
    outcome,
  },
  {
    id: "cv-drainage",
    sector: "civil",
    title: "Site and drainage coordination",
    category: "Civil site development",
    challenge:
      "Grading, stormwater, and the building pad are being drawn by different people, and the water has nowhere honest to go.",
    solution:
      "Build one existing-conditions picture, name the reviewing authority, and coordinate drainage, grading, and the structure before permit drawings diverge.",
    disciplines: ["Civil engineering", "Stormwater design", "Coordination"],
    tools: ["Civil CAD", "Local stormwater criteria", "Grading plan"],
    collaboration:
      "The civil designer leads the site. The structural member confirms the pad and foundation assumptions. Submittal documents stay under the licensee who will sign them.",
    deliverables: ["Existing-conditions basis", "Grading concept", "Drainage narrative", "Coordination markups"],
    outcome,
  },
  {
    id: "cv-permit",
    sector: "civil",
    title: "Permit drawing set",
    category: "Construction documents",
    challenge:
      "A client has sketches and a contractor’s questions, but not a drawing set an authority can review, and no one has checked which code edition applies.",
    solution:
      "Confirm the authority having jurisdiction, list the required sheets, and produce documents for review by the professional who is allowed to submit them.",
    disciplines: ["Drafting", "Code research", "Professional engineering"],
    tools: ["CAD or BIM", "Municipal submittal checklist", "Local amendments"],
    collaboration:
      "Production drafting can be shared. The decision to submit, and the seal, stay with the licensed professional. Comments from the authority go back to that professional.",
    deliverables: ["Sheet list", "Draft permit set", "Code-edition note", "Response log"],
    outcome,
  },
  {
    id: "cv-rehab",
    sector: "civil",
    title: "Structural rehabilitation concept",
    category: "Existing buildings",
    challenge:
      "An existing structure shows distress or must carry a new use. A repair sketch is circulating without a survey of what is actually there.",
    solution:
      "Start with observation and available drawings, state what is unknown, and develop strengthening concepts for an engineer qualified to evaluate the existing building.",
    disciplines: ["Structural engineering", "Field observation", "Drafting"],
    tools: ["Existing drawings", "Photo log", "Analysis of the observed condition"],
    collaboration:
      "One member gathers the record. The engineer of record decides what must be opened up, calculated, or left alone. No repair is described as adequate without that review.",
    deliverables: ["Observation notes", "Unknowns list", "Concept repair sketches", "Engineer’s review"],
    outcome,
  },
  {
    id: "fn-reporting",
    sector: "finance",
    title: "Financial reporting automation",
    category: "Management reporting",
    challenge:
      "The monthly package is rebuilt by copying cells. Two versions of revenue circulate, and nobody can say which export they came from.",
    solution:
      "Name the source system, automate the extract, and keep a person responsible for reviewing exceptions before the package is called final.",
    disciplines: ["Accounting", "Data analysis", "Software automation"],
    tools: ["Accounting system export", "Reconciliations", "A documented workbook or dashboard"],
    collaboration:
      "An accountant defines the report. A developer automates the repeatable steps. The accountant, not the script, accepts the month.",
    deliverables: ["Report map", "Reconciliation checks", "Automated extract", "Review sign-off list"],
    outcome,
  },
  {
    id: "fn-forecast",
    sector: "finance",
    title: "Revenue forecast workspace",
    category: "Forecasting",
    challenge:
      "A forecast is a single number with no drivers, so a leadership meeting cannot tell what would have to change for the number to move.",
    solution:
      "Build a driver-based draft, label every assumption, and present ranges only where the underlying evidence supports them. Do not describe the model as a promise.",
    disciplines: ["Financial analysis", "Accounting", "Dashboard development"],
    tools: ["Driver model", "Historical actuals", "Scenario notes"],
    collaboration:
      "The analyst owns the logic. Accounting confirms the historicals. A developer can host the view. The assumptions stay visible on the page.",
    deliverables: ["Driver list", "Model", "Scenario notes", "Data-source log"],
    outcome,
  },
  {
    id: "fn-workflow",
    sector: "finance",
    title: "Accounting workflow cleanup",
    category: "Close process",
    challenge:
      "The close depends on inboxes and memory. A new person cannot tell which reconciliation is done, or who may post a journal entry.",
    solution:
      "Write the close checklist, assign each step, and separate preparation from review. Where a CPA’s independence rules matter, nonattest help stops short of management decisions.",
    disciplines: ["Bookkeeping", "Accounting management", "Process design"],
    tools: ["Close checklist", "Accounting software", "Review notes"],
    collaboration:
      "A bookkeeper prepares. A reviewer approves. Software support removes retyping. Nobody describes the checklist as an audit.",
    deliverables: ["Close checklist", "Role split", "Exception log", "Service description"],
    outcome,
  },
  {
    id: "fn-cost",
    sector: "finance",
    title: "Cost and margin review",
    category: "Cost analysis",
    challenge:
      "A business can see total profit and cannot see which service, job, or product is carrying the rest.",
    solution:
      "Define a costing method the managers understand, tie it to the ledger, and show the allocations instead of hiding them in a formula.",
    disciplines: ["Cost accounting", "Financial analysis", "Reporting"],
    tools: ["Job or product map", "General ledger mapping", "Margin view"],
    collaboration:
      "The analyst proposes the method. The accountant tests it against the books. Management chooses the allocation. The worksheet records that choice.",
    deliverables: ["Costing method note", "Mapping", "Margin view", "Open questions"],
    outcome,
  },
  {
    id: "fn-tax",
    sector: "finance",
    title: "Bookkeeping and tax coordination",
    category: "Tax workflow",
    challenge:
      "Books are current enough for management and not organized for a preparer. Tax questions are being answered by the person who runs payroll, who is not credentialed to do so.",
    solution:
      "Organize the workpapers, list the questions, and hand tax preparation to a preparer who meets IRS requirements. The bookkeeper does not become the signer of the return.",
    disciplines: ["Bookkeeping", "Tax preparation", "Document control"],
    tools: ["Workpaper index", "Accounting file", "Preparer checklist"],
    collaboration:
      "The bookkeeper prepares a clean file. A credentialed preparer owns the return. Software people may build trackers. They do not give tax advice.",
    deliverables: ["Workpaper index", "Question list", "Handoff to the preparer", "Status tracker"],
    outcome,
  },
];

export const sectorFilters: { slug: SectorSlug | "all"; label: string }[] = [
  { slug: "all", label: "All examples" },
  { slug: "software", label: "Software & AI" },
  { slug: "hardware", label: "Hardware" },
  { slug: "civil", label: "Civil & Structural" },
  { slug: "finance", label: "Accounting & Finance" },
];
