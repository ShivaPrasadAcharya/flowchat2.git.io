// data.js
const flowchartData = [
    {
    id: '0003',
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
  },
  {
    id: '0002',
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
    id: '0001',
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
  
  
 
];

export default flowchartData;
