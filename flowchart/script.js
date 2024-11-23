import flowchartData from './data.js';

document.addEventListener("DOMContentLoaded", () => {
    let currentZoomLevel = 1;
    const zoomStep = 0.1;
    const container = document.getElementById('flowcharts-container');
    
    // Initialize Mermaid
    mermaid.initialize({ startOnLoad: true });

    // Populate title filter options
    const titleFilter = document.getElementById('titleFilter');
    const uniqueTitles = [...new Set(flowchartData.map(chart => chart.title))];
    uniqueTitles.forEach(title => {
        const option = document.createElement('option');
        option.value = title;
        option.textContent = title;
        titleFilter.appendChild(option);
    });

    // Render initial flowcharts
    renderFlowcharts(flowchartData);

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedTitle = titleFilter.value;
        
        const filteredData = flowchartData.filter(chart => {
            const matchesSearch = chart.title.toLowerCase().includes(searchTerm) ||
                                chart.diagram.toLowerCase().includes(searchTerm);
            const matchesTitle = selectedTitle === 'all' || chart.title === selectedTitle;
            return matchesSearch && matchesTitle;
        });
        
        renderFlowcharts(filteredData);
        highlightSearchTerm(searchTerm);
    }

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Filter functionality
    titleFilter.addEventListener('change', () => {
        handleSearch(); // Reuse search handler to combine search and filter
    });

    // Zoom functionality
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');

    zoomIn.addEventListener('click', () => {
        if (currentZoomLevel < 2) {
            currentZoomLevel += zoomStep;
            applyZoom();
        }
    });

    zoomOut.addEventListener('click', () => {
        if (currentZoomLevel > 0.5) {
            currentZoomLevel -= zoomStep;
            applyZoom();
        }
    });

    function applyZoom() {
        const charts = document.querySelectorAll('.chart');
        charts.forEach(chart => {
            chart.style.transform = `scale(${currentZoomLevel})`;
            chart.style.transformOrigin = 'center center';
        });
    }

    // Helper functions
    function renderFlowcharts(data) {
        container.innerHTML = '';
        if (data.length === 0) {
            container.innerHTML = '<div class="flowchart-item"><p>No matching flowcharts found.</p></div>';
            return;
        }
        
        data.forEach(chart => {
            const chartDiv = document.createElement('div');
            chartDiv.className = 'flowchart-item';
            chartDiv.innerHTML = `
                <h1 class="flowchart-title">${chart.title}</h1>
                <div class="chart">
                    <pre class="mermaid">
                        ${chart.diagram}
                    </pre>
                </div>
                <p class="collector-info">
                    ${chart.collector}<br>
                    ${chart.organization}
                </p>
            `;
            container.appendChild(chartDiv);
        });
        mermaid.init(undefined, '.mermaid');
    }

    function highlightSearchTerm(searchTerm) {
        if (!searchTerm) return;

        const textNodes = [];
        function getTextNodes(node) {
            if (node.nodeType === 3) {
                textNodes.push(node);
            } else {
                for (let child of node.childNodes) {
                    getTextNodes(child);
                }
            }
        }

        const charts = document.querySelectorAll('.flowchart-item');
        charts.forEach(chart => getTextNodes(chart));

        textNodes.forEach(node => {
            const text = node.textContent;
            if (text.toLowerCase().includes(searchTerm)) {
                const span = document.createElement('span');
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                span.innerHTML = text.replace(regex, '<span class="highlight">$1</span>');
                node.parentNode.replaceChild(span, node);
            }
        });
    }
});