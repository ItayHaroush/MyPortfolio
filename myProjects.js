(function () {
    'use strict';

    const projectsData = JSON.parse(document.getElementById('projectsData').textContent);
    const grid = document.getElementById('projectsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let filteredProjects = [...projectsData];
    let activeFilter = 'all';

    function getLang() {
        return window.PortfolioI18n ? window.PortfolioI18n.getLang() : 'en';
    }

    function t(key) {
        return window.PortfolioI18n ? window.PortfolioI18n.t(key) : key;
    }

    function translateTag(tag) {
        return window.PortfolioI18n ? window.PortfolioI18n.translateTag(tag) : tag;
    }

    function getDescription(p) {
        const lang = getLang();
        if (p.description && typeof p.description === 'object') {
            return p.description[lang] || p.description.en || p.description.he || '';
        }
        return p.description || '';
    }

    function renderProjectCard(p) {
        const isExternal = p.url && (p.url.startsWith('http') || p.url.startsWith('//'));
        const linkTarget = isExternal ? '_blank' : '_self';
        const linkRel = isExternal ? 'rel="noopener noreferrer"' : '';
        const primaryUrl = p.landingUrl || p.url;
        const hasLanding = !!p.landingUrl;
        const noImageText = encodeURIComponent(t('projects.noImage'));

        const tagsHtml = (p.tags || []).length
            ? '<div class="project-tags">' + (p.tags || []).map(tag => `<span class="project-tag">${translateTag(tag)}</span>`).join('') + '</div>'
            : '';

        return `
            <div class="project-card" data-type="${p.type || ''}">
                <div class="project-card-inner">
                    <div class="project-card-image">
                        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='https://placehold.co/250x150/2c3133/666?text=${noImageText}'">
                        ${tagsHtml}
                    </div>
                    <div class="project-card-content">
                        <h2>${p.title}</h2>
                        <p>${getDescription(p)}</p>
                        <div class="project-card-btns">
                            <a href="${primaryUrl}" class="btn" target="${linkTarget}" ${linkRel}>${t('projects.view')}</a>
                            ${hasLanding ? `<a href="${p.url}" class="btn btn-light btn-small" target="_blank" rel="noopener noreferrer">${t('projects.homepage')}</a>` : ''}
                        </div>
                        ${p.tech ? `<small class="project-tech">${p.tech}</small>` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    function renderAll() {
        grid.innerHTML = filteredProjects.map(renderProjectCard).join('');
    }

    function applyFilter(type) {
        activeFilter = type;
        filteredProjects = type === 'all'
            ? [...projectsData]
            : projectsData.filter(p => p.type === type);
        renderAll();
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            applyFilter(btn.dataset.filter);
        });
    });

    document.addEventListener('languagechange', () => {
        applyFilter(activeFilter);
    });

    applyFilter('all');
})();
