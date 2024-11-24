// data.js
const flowchartData = [
  {
    id: '0002',
    title: 'निरन्तर ९० दिन अनुपस्थित कर्मचारीलाई विभागिय कारवहीको प्रक्रिया',
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
    style O fill:#ff6666,
},
  {
    id: '0001',
    title: 'Jurisdiction of District Court',
    language: 'en',
    collector: 'सङ्कलनकर्ताः शिवप्रसादाचार्यः (२०८१)',
    organization: 'सर्वोच्च अदालत',
    diagram: `
    flowchart TD
    A[Jurisdiction of District Court<br>Section 7] 
    
    A --> B["Section 7.1:<br>Original Jurisdiction<br><i>Unless otherwise provided by prevailing law</i>"]
    
    B --> C["1. All types of cases within<br>its district"]
    B --> D["2. Cases ordered for hearing by<br>High Court as per Article 145(2)<br>of Constitution"]
    
    A --> E["Section 7.2:<br>Habeas Corpus<br>Jurisdiction"]
    
    E --> F["Power to issue orders in cases<br>of illegal detention within<br>its district"]
    
    A --> G["Section 7.3:<br>Injunction<br>Jurisdiction"]
    
    G --> H["Power to issue orders when legal<br>rights are infringed or there is<br>apprehension of infringement<br>within its district"]
    
    A --> I["Section 7.4:<br>Appellate<br>Jurisdiction"]
    
    I --> J["1. Appeals against decisions of<br>quasi-judicial bodies/officials<br>under federal law"]
    I --> K["2. Appeals against decisions of<br>local judicial bodies formed<br>under provincial law"]
    
    style A fill:#2b6cb0,stroke:#1a365d,stroke-width:2px,color:white`
  }
];

export default flowchartData;
