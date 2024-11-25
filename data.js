// data.js
const flowchartData = [
  {
id: '0008 ',
title: ' Sytemic Model',
language: 'np',
collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
organization: 'सर्वोच्च अदालत',
diagram: `
graph LR
    Input[/"Input:
    Case Filings
    Legal Personnel
    Court Infrastructure
    Financial Resources"/]

    Process[/"Process:
    Case Registration
    Evidence Collection
    Court Hearings
    Legal Arguments"/]

    Output[/"Output:
    Cases Resolved
    Judgments Delivered
    Orders Issued
    Records Maintained"/]

    Outcome[/"Outcome:
    Timely Justice
    Legal Precedents
    Dispute Resolution
    Enforcement"/]

    Impact[/"Impact:
    Public Trust
    Rule of Law
    Social Order
    Justice Access"/]

    Feedback[/"Feedback Loop:
    Case Law Updates
    Procedure Reforms
    Resource Allocation
    Training Needs"/]

    Input --> Process
    Process --> Output
    Output --> Outcome
    Outcome --> Impact
    Impact --> Feedback
    Feedback --> Input

    style Feedback fill:#e6e6fa, stroke:#1a365d,stroke-width:2px,color:black`
  },
  {
id: '0007',
title: 'प्रत्यायोजन विधान निर्माण प्रक्रिया',
language: 'np',
collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
organization: 'सर्वोच्च अदालत',
diagram: `
flowchart TD
    A[संघीय संसदद्वारा/प्रदेश सभाद्वारा मूल ऐन पारित] -->|अधिकार प्रत्यायोजन| B[सम्बन्धित मन्त्रालय/निकाय]
    
    B --> C[नियम/विनियमको मस्यौदा तयारी]
    
    C --> D[कानून मन्त्रालयको राय/सहमति]
    
    D --> E[मन्त्रिपरिषद्को स्वीकृति]
    
    E --> F[नेपाल/प्रदेश राजपत्रमा प्रकाशन]
    
    F --> G[संसदमा/ प्रदेश सभमा पेश]
    
    G --> H{संसदीय समिति / प्रदेश समितिको छलफल}
    
    H -->|संशोधन आवश्यक नभएमा| I[कार्यान्वयनमा]
    H -->|संशोधन आवश्यक भएमा| J[संशोधन प्रक्रिया]
    
    J --> K[पुनः मन्त्रिपरिषद् स्वीकृति]
    
    K --> F
    
    style A fill:#d4f1f4
    style B fill:#e1f7d5
    style I fill:#ffe6e6

style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:black`
},

{
id: '0006',
title: 'उदाहरणः प्रत्यायोजन विधायन निर्माण',
language: 'np',
collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
organization: 'सर्वोच्च अदालत',
diagram: `
flowchart TD
    subgraph lok-sewa[लोक सेवा आयोग]
        A[नियमावलीको आवश्यकता पहिचान] --> B[प्रारम्भिक मस्यौदा तयारी]
        B --> C[आयोगको बैठकमा छलफल]
        C --> D[आयोगको स्वीकृति]
    end

    subgraph sahayak[सहायक निकायहरू]
        E[कर्मचारी संघ/संगठनसँग परामर्श]
        F[विज्ञ समूहको राय]
        G[सरोकारवाला निकायको प्रतिक्रिया]
    end

    subgraph jimmewar[मुख्य जिम्मेवार निकायहरू]
        H[कानून मन्त्रालय]
        I[सामान्य प्रशासन मन्त्रालय]
        J[मन्त्रिपरिषद्]
    end

    B --> E
    B --> F
    B --> G
    
    E --> C
    F --> C
    G --> C
    
    D --> H
    H -->|कानूनी राय/सहमति| I
    I -->|सिफारिस| J
    J -->|स्वीकृति| K[नेपाल राजपत्रमा प्रकाशन]
    
    K --> L[कार्यान्वयन]
    
    style A fill:#d4f1f4
    style D fill:#e1f7d5
    style J fill:#ffe6e6
    style K fill:#f9d5e5

style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:black`
},


   {
    id: '0005',
    title: 'कानून तर्जुमा प्रकिया',
    language: 'np',
    collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
    organization: 'सर्वोच्च अदालत',
    diagram: `
   flowchart TB
    %% सम्बन्धित मन्त्रालयको कार्यहरू
    A["सम्बन्धित मन्त्रालय:<br>विधायन व्यवस्थापन सम्बन्धी विचार"] 
    B["सम्बन्धित मन्त्रालय:<br>सरोकारवालाहरूसँग छलफल"]
    C["सम्बन्धित मन्त्रालय:<br>कानून आवश्यकताको पहिचान"]
    D{"नयाँ कानून<br>आवश्यक छ?"}
    E["विद्यमान कानूनमा संशोधन"]
    F["सम्बन्धित मन्त्रालय:<br>१२ बुँदे अवधारणापत्र तयारी"]

    %% कानून मन्त्रालयको कार्यहरू
    G["कानून मन्त्रालय:<br>अवधारणापत्रमा सहमति<br>(संवैधानिक र कानूनी परीक्षण)"]

    %% मन्त्रिपरिषद्को कार्यहरू
    H["मन्त्रिपरिषद्मा सैद्धान्तिक<br>स्वीकृतिको लागि पेश"]
    I{"सैद्धान्तिक<br>स्वीकृति?"}

    %% मस्यौदा तयारी
    K["विधेयक मस्यौदा तयारी:<br>- सम्बन्धित मन्त्रालय वा<br>- कानून मन्त्रालय वा<br>- नेपाल कानून आयोग"]
    L["सरोकारवालाहरूसँग परामर्श"]
    M["मस्यौदामा आवश्यक परिमार्जन"]

    %% तर्जुमा सहमति
    N["कानून मन्त्रालय:<br>तर्जुमा सहमतिको लागि परीक्षण"]
    O{"तर्जुमा<br>सहमति?"}
    P["पुनः मस्यौदा संशोधन"]

    %% अन्तिम स्वीकृति
    Q["मन्त्रिपरिषद्मा स्वीकृतिको लागि पेश"]
    R["विधेयक समितिमा छलफल"]
    S{"मन्त्रिपरिषद्को<br>स्वीकृति?"}
    T["पुनः परिमार्जन"]

    %% संसद दर्ता
    U["कानून मन्त्रालय मार्फत संसदमा दर्ता:<br>- प्रत्यायोजित विधायन टिप्पणी<br>- उद्देश्य र कारण<br>- आर्थिक व्ययभार विवरण"]

    %% Flow connections
    A --> B --> C --> D
    D -->|छैन| E
    D -->|छ| F --> G --> H --> I
    I -->|छैन| F
    I -->|छ| K --> L --> M --> N --> O
    O -->|छैन| P --> N
    O -->|छ| Q --> R --> S
    S -->|छैन| T --> Q
    S -->|छ| U

    %% Styling
    classDef ministry fill:#e6f3ff,stroke:#333
    classDef lawMinistry fill:#ffedb3,stroke:#333
    classDef cabinet fill:#d4edda,stroke:#333
    classDef decision fill:#f9f9f9,stroke:#333

    class A,B,C,F ministry
    class G,N,U lawMinistry
    class H,Q,R cabinet
    class D,I,O,S decision
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:black`
  },
   {
    id: '0004',
    title: 'उदाहरणः क्रिप्टो कानून तर्जमा प्रकिया',
    language: 'np',
    collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
    organization: 'सर्वोच्च अदालत',
    diagram: `
   flowchart TB
    %% अर्थ मन्त्रालयको प्रारम्भिक कार्य
    A["अर्थ मन्त्रालय:<br>क्रिप्टोकरेन्सी नियमनको आवश्यकता पहिचान<br>- डिजिटल मुद्राको बढ्दो प्रयोग<br>- वित्तीय जोखिम<br>- कर छली नियन्त्रण"]

    %% सरोकारवालाहरूसँग छलफल
    B["सरोकारवालाहरूसँग छलफल/परामर्श:<br>- नेपाल राष्ट्र बैंक<br>- सेबोन<br>- वाणिज्य बैंकहरू<br>- फिनटेक कम्पनीहरू<br>- साइबर ब्युरो<br>- वित्तीय जानकारी इकाई"]

    %% अवधारणापत्र तयारी
    C["अर्थ मन्त्रालय:<br>१२ बुँदे अवधारणापत्र तयारी:<br>- क्रिप्टो कारोबार नियमन<br>- डिजिटल वालेट नियमन<br>- माइनिङ सम्बन्धी व्यवस्था<br>- कर व्यवस्था<br>- जोखिम न्यूनीकरण"] 

    %% कानून मन्त्रालयको सहमति
    D["कानून मन्त्रालय:<br>अवधारणापत्र परीक्षण:<br>- संवैधानिक परीक्षण<br>- अन्य कानूनसँग तादात्म्यता<br>- अन्तर्राष्ट्रिय मापदण्ड"]

    %% मन्त्रिपरिषद् स्वीकृति
    E["मन्त्रिपरिषद्मा पेश:<br>सैद्धान्तिक स्वीकृतिको लागि"]
    F{"सैद्धान्तिक<br>स्वीकृति?"}

    %% विधेयक मस्यौदा
    G["विधेयक मस्यौदा तयारी:<br>- अर्थ मन्त्रालय<br>- नेपाल राष्ट्र बैंक<br>- कानून मन्त्रालयको सहयोगमा"]

    %% विस्तृत छलफल
    H["विस्तृत छलफल/परामर्श:<br>- नियामक निकायहरू<br>- वित्तीय संस्थाहरू<br>- विज्ञहरू<br>- सुरक्षा निकायहरू"]

    %% मस्यौदा परिमार्जन
    I["मस्यौदा परिमार्जन:<br>प्राप्त सुझाव समावेश"]

    %% कानून मन्त्रालय सहमति
    J["कानून मन्त्रालय:<br>तर्जुमा सहमति"]
    K{"तर्जुमा<br>सहमति?"}

    %% मन्त्रिपरिषद् स्वीकृति
    L["मन्त्रिपरिषद्मा पेश"]
    M["विधेयक समिति:<br>- कानून मन्त्री संयोजक<br>- अर्थ मन्त्री सदस्य<br>- अन्य सदस्यहरू"]
    N{"मन्त्रिपरिषद्को<br>स्वीकृति?"}

    %% संसद दर्ता
    O["कानून मन्त्रालय मार्फत संसदमा दर्ता:<br>विधेयकसँगै:<br>- वित्तीय प्रभाव मूल्यांकन<br>- नियामक प्रभाव विश्लेषण<br>- कार्यान्वयन कार्ययोजना"]

    %% Flow connections
    A --> B --> C --> D --> E --> F
    F -->|छैन| C
    F -->|छ| G --> H --> I --> J --> K
    K -->|छैन| I
    K -->|छ| L --> M --> N
    N -->|छैन| I
    N -->|छ| O

    %% Styling
    classDef ministry fill:#e6f3ff,stroke:#333
    classDef lawMinistry fill:#ffedb3,stroke:#333
    classDef cabinet fill:#d4edda,stroke:#333
    classDef stakeholder fill:#fff2cc,stroke:#333
    classDef decision fill:#f9f9f9,stroke:#333

    class A,C,G,I ministry
    class D,J,O lawMinistry
    class E,L,M cabinet
    class B,H stakeholder
    class F,K,N decision
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:black`
  },
  {
    id: '0003',
    title: 'नमूना (Sample) प्रकार- व्याख्या',
    language: 'np',
    collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
    organization: 'सर्वोच्च अदालत <br><br>' + 
    '<b>1. सम्भाव्यता नमूना छनौट (Probability Sampling)</b><br><br>' +
    '<b>a. साधारण यादृच्छिक नमूना (Simple Random Sampling)</b><br>' +
    '- जनसंख्याको प्रत्येक सदस्यलाई छनौट हुने समान अवसर दिइन्छ<br>' +
    '- उदाहरण: कक्षाका 40 विद्यार्थीमध्ये चिट्ठा प्रणालीबाट 10 जना छान्नु<br><br>' +
    '<b>b. व्यवस्थित नमूना (Systematic Sampling)</b><br>' +
    '- निश्चित अन्तरालमा नमूना छानिन्छ<br>' +
    '- उदाहरण: 100 घरधुरीमध्ये हरेक 10औं घर (1, 11, 21, 31... छान्नु<br><br>' +
    '<b>c. स्तरीकृत नमूना (Stratified Sampling)</b><br>' +
    '- जनसंख्यालाई समूहमा विभाजन गरी प्रत्येक समूहबाट नमूना छानिन्छ<br>' +
    '- उदाहरण: विद्यालयमा कक्षा 6, 7 र 8 का विद्यार्थीहरूबाट छुट्टाछुट्टै नमूना लिने<br><br>' +
    '<b>d. समूह नमूना (Cluster Sampling)</b><br>' +'यो एउटा यस्तो विधि हो जसमा जनसंख्यालाई प्राकृतिक समूहहरूमा विभाजन गरिन्छ र त्यसपछि केही समूहहरूको यादृच्छिक छनौट गरिन्छ <br>'+
    '- पहिलो चरण: सबै प्रदेशमध्ये 3 वटा प्रदेश छनौट<br>'+
'दोस्रो चरण: छानिएका प्रदेशका 5/5 वटा जिल्ला छनौट<br>'+
'तेस्रो चरण: छानिएका जिल्लाका 10/10 वटा गाउँ/नगर छनौट<br>'+
'अन्तिम चरण: छानिएका गाउँ/नगरका सबै घरधुरीको अध्ययन<br><br>' +
    '- उदाहरण: जिल्लाका सबै गाउँपालिकामध्ये केही गाउँपालिका छानेर अध्ययन गर्ने<br><br>' +
    '<b>2. असम्भाव्यता नमूना छनौट (Non-Probability Sampling)</b><br><br>' +
    '<b>a. सुविधाजनक नमूना (Convenience Sampling)</b><br>' +
    '- सजिलै उपलब्ध हुने व्यक्तिहरू छानिन्छ<br>' +
    '- उदाहरण: पसलमा आएका ग्राहकहरूसँग सर्वेक्षण गर्ने<br><br>' +
    '<b>b. उद्देश्यमूलक नमूना (Purposive Sampling)</b><br>' +
    '- विशेष उद्देश्यका लागि जानीजानी छानिन्छ<br>' +
    '- विज्ञ नमूना (Expert Sampling): विषय विशेषज्ञहरूसँग अन्तर्वार्ता<br>' +
    '- विविधतायुक्त नमूना (Heterogeneity): फरक-फरक पृष्ठभूमिका मान्छे छान्ने<br>' +
    '- एकरूपी नमूना (Homogeneous): समान विशेषता भएका मान्छे छान्ने<br><br>' +
    '<b>c. कोटा नमूना (Quota Sampling)</b><br>' +
    '- निश्चित संख्या तोकेर त्यति नपुगेसम्म छान्ने<br>' +
    '- उदाहरण: 50 पुरुष र 50 महिला नभेटेसम्म सर्वेक्षण गर्ने<br><br>' +
    '<b>d. हिउँको डल्लो नमूना (Snowball Sampling)</b><br>' +
    '- एक व्यक्तिले अर्को व्यक्तिलाई सिफारिस गर्दै जाने<br>' +
    '- उदाहरण: एक जना लागूपदार्थ प्रयोगकर्ताले अन्य प्रयोगकर्ता चिनाउँदै जाने<br><br>' +
    '<b>विशेष बुँदाहरू:</b><br>' +
    '- समानुपातिक (Proportional): जनसंख्याको अनुपातमा नमूना छान्ने<br>' +
    '- असमानुपातिक (Disproportional): जनसंख्याको अनुपात नमिलाई नमूना छान्ने<br>' +
    '- एकल-चरण (Single-Stage): एकै पटक नमूना छान्ने<br>' +
    '- बहु-चरण (Multi-Stage): धेरै चरणमा नमूना छान्ने<br>', 
    diagram: `
       graph TD
    A[Sampling Methods<br>नमूना छनौटका विधिहरू] --> B[Probability Sampling<br>सम्भाव्यता नमूना छनौट]
    A --> C[Non-Probability Sampling<br>असम्भाव्यता नमूना छनौट]
    
    B --> D[Simple Random Sampling<br>साधारण यादृच्छिक नमूना]
    B --> E[Systematic Sampling<br>व्यवस्थित नमूना]
    B --> F[Stratified Sampling<br>स्तरीकृत नमूना]
    B --> G[Cluster Sampling<br>समूह नमूना]
    
    F --> H[Proportionate<br>समानुपातिक]
    F --> I[Disproportionate<br>असमानुपातिक]
    
    G --> J[Single-Stage<br>एकल-चरण]
    G --> K[Multi-Stage<br>बहु-चरण]
    
    C --> L[Convenience Sampling<br>सुविधाजनक नमूना]
    C --> M[Purposive Sampling<br>उद्देश्यमूलक नमूना]
    C --> N[Quota Sampling<br>कोटा नमूना]
    C --> O[Snowball Sampling<br>हिउँको डल्लो नमूना]
    
    M --> P[Expert Sampling<br>विज्ञ नमूना]
    M --> Q[Heterogeneity Sampling<br>विविधतायुक्त नमूना]
    M --> R[Homogeneous Sampling<br>एकरूपी नमूना]
    
    N --> S[Proportional<br>समानुपातिक]
    N --> T[Non-proportional<br>असमानुपातिक]
 style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white`
  },
  {
    id: '0002',
  title: 'Sampling Types-graph',
  language: 'en',
  collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
  organization: 'सर्वोच्च अदालत <br> ',
  diagram: `
     graph TD
    A[Sampling Methods<br>नमूना छनौटका विधिहरू] --> B[Probability Sampling<br>सम्भाव्यता नमूना छनौट]
    A --> C[Non-Probability Sampling<br>असम्भाव्यता नमूना छनौट]
    
    B --> D[Simple Random Sampling<br>साधारण यादृच्छिक नमूना]
    B --> E[Systematic Sampling<br>व्यवस्थित नमूना]
    B --> F[Stratified Sampling<br>स्तरीकृत नमूना]
    B --> G[Cluster Sampling<br>समूह नमूना]
    
    F --> H[Proportionate<br>समानुपातिक]
    F --> I[Disproportionate<br>असमानुपातिक]
    
    G --> J[Single-Stage<br>एकल-चरण]
    G --> K[Multi-Stage<br>बहु-चरण]
    
    C --> L[Convenience Sampling<br>सुविधाजनक नमूना]
    C --> M[Purposive Sampling<br>उद्देश्यमूलक नमूना]
    C --> N[Quota Sampling<br>कोटा नमूना]
    C --> O[Snowball Sampling<br>हिउँको डल्लो नमूना]
    
    M --> P[Expert Sampling<br>विज्ञ नमूना]
    M --> Q[Heterogeneity Sampling<br>विविधतायुक्त नमूना]
    M --> R[Homogeneous Sampling<br>एकरूपी नमूना]
    
    N --> S[Proportional<br>समानुपातिक]
    N --> T[Non-proportional<br>असमानुपातिक]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white`
  },
  
  {
    id: '0001',
    title: 'विभागीय सजायको प्रकिया',
    language: 'np',
    collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
    organization: 'सर्वोच्च अदालत',
    diagram: `
    flowchart TD

    A[कर्मचारी ३ महिना भन्दा बढी बिना सूचना अनुपस्थित<br>ऐन दफा ६१.१.छ]
    
    B[कार्यालय प्रमुखले अभिलेख जाँच<br>नियमावली नियम १२३]
    
    C[सम्बन्धित कर्मचारीको घर ठेगानामा पत्राचार<br>नियमावली नियम १२३.१]
    
    D{१५ दिने स्पष्टीकरण माग<br>नियमावली नियम ११२.१}
    
    E[जवाफ समीक्षा<br>नियमावली नियम ११२.२]
    
    F[स्थानीय/राष्ट्रिय पत्रपत्रिकामा सार्वजनिक सूचना<br>नियमावली नियम १२३.२]
    
    G{सूचनाको म्याद भित्र सम्पर्क?<br>नियमावली नियम १२३.३}
    
    H[विभागीय कारवाही सुरु<br>ऐन दफा ६६ र नियमावली नियम ११२]
    
    I{जवाफ सन्तोषजनक?<br>नियमावली नियम ११२.३}
    
    J[उचित निर्णय लिने]
    
    K[भविष्यमा सरकारी सेवाको निमित्त अयोग्य नठहरिने गरी<br>सेवाबाट हटाउने प्रक्रिया<br>ऐन दफा ६१.१.छ]
    
    L[अधिकार प्राप्त अधिकारी समक्ष प्रस्ताव पेश<br>ऐन दफा ६२]
    
    M[लोक सेवा आयोगको परामर्श<br>ऐन दफा ६९]
    
    N[अन्तिम निर्णयको लागि अधिकार प्राप्त<br>अधिकारी समक्ष पेश<br>नियमावली नियम ११२.४]
    
    O[सेवाबाट हटाउने निर्णय<br>ऐन दफा ६१.१.छ]
    
    P[सम्बन्धित कर्मचारीलाई जानकारी<br>नियमावली नियम ११३]
    
    A --> B --> C --> D
    D -->|हुन्छ| E
    D -->|हुन्न| F
    F --> G
    G -->|छ| E
    G -->|छैन| H
    E --> I
    I -->|छ| J
    I -->|छैन| H
    H --> K --> L --> M --> N --> O --> P

    style A fill:#ffcccc
    style H fill:#ff9999
    style O fill:#ff6666
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white`
  }
 
];

export default flowchartData;
