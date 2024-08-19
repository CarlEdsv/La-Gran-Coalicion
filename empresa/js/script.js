document.addEventListener('DOMContentLoaded', function() {
    const jobs = [
        { title: 'Desarrollador Web', company: 'Tech Solutions', location: 'Madrid', datePosted: '2024-08-01', type: 'Full-time' },
        { title: 'Analista de Datos', company: 'Data Corp', location: 'Barcelona', datePosted: '2024-08-10', type: 'Part-time' },
        { title: 'Diseñador Gráfico', company: 'Creatives Inc.', location: 'Valencia', datePosted: '2024-08-15', type: 'Freelance' },
        { title: 'Gestor de Proyectos', company: 'ManageIt', location: 'Sevilla', datePosted: '2024-08-20', type: 'Full-time' },
        { title: 'Desarrollador Backend', company: 'CodeMasters', location: 'Bilbao', datePosted: '2024-08-05', type: 'Part-time' },
        { title: 'Marketing Digital', company: 'AdVenture', location: 'Madrid', datePosted: '2024-08-12', type: 'Freelance' },
        { title: 'Asistente Administrativo', company: 'OfficeWorks', location: 'Barcelona', datePosted: '2024-08-07', type: 'Full-time' },
        { title: 'Consultor en IT', company: 'TechGuru', location: 'Madrid', datePosted: '2024-08-03', type: 'Part-time' },
        { title: 'Ingeniero en Software', company: 'SoftWare', location: 'Murcia', datePosted: '2024-08-18', type: 'Full-time' },
        { title: 'Especialista en SEO', company: 'WebOptimize', location: 'Alicante', datePosted: '2024-08-13', type: 'Freelance' }
    ];

    // Mostrar todos los trabajos al cargar la página
    displayResults(jobs);

    // Función de búsqueda y filtro
    document.getElementById('search-button').addEventListener('click', function() {
        const query = document.getElementById('search-input').value.toLowerCase();
        const jobType = document.getElementById('job-type').value;
        const location = document.getElementById('location').value.toLowerCase();
        const datePosted = document.getElementById('date-posted').value;
        const sortBy = document.getElementById('sort-by').value;

        // Filtrar trabajos
        const filteredJobs = jobs.filter(job => {
            return (
                (query === '' || job.title.toLowerCase().includes(query)) &&
                (jobType === '' || job.type === jobType) &&
                (location === '' || job.location.toLowerCase().includes(location)) &&
                (datePosted === '' || job.datePosted === datePosted)
            );
        });

        // Ordenar trabajos
        if (sortBy === 'date-asc') {
            filteredJobs.sort((a, b) => new Date(a.datePosted) - new Date(b.datePosted));
        } else if (sortBy === 'date-desc') {
            filteredJobs.sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted));
        } else if (sortBy === 'title-asc') {
            filteredJobs.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'title-desc') {
            filteredJobs.sort((a, b) => b.title.localeCompare(a.title));
        }

        displayResults(filteredJobs);
    });

    function displayResults(results) {
        const container = document.getElementById('results-container');
        container.innerHTML = '';

        if (results.length === 0) {
            container.innerHTML = '<p>No se encontraron trabajos.</p>';
            return;
        }

        results.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job-listing');
            jobDiv.innerHTML = `
                <img src="path/to/your/image.jpg" alt="Job Image" class="job-image">
                <div class="job-details">
                    <h2>${job.title}</h2>
                    <p>Empresa: ${job.company}</p>
                    <p>Ubicación: ${job.location}</p>
                    <p>Fecha de Publicación: ${job.datePosted}</p>
                    <p>Tipo: ${job.type}</p>
                </div>
            `;
            container.appendChild(jobDiv);
        });
    }
});
