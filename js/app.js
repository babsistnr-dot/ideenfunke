/**
 * IdeenFunke - Main Application Logic
 * MVP Features: F1 (Altersauswahl), F3 (Aktivitätsanzeige), F4 (Neue Ideen)
 */

// ===== State Management =====
let currentAgeGroup = null;
let displayedActivityIds = [];

// ===== DOM Elements =====
const ageButtons = document.querySelectorAll('.age-btn');
const activitiesGrid = document.getElementById('activitiesGrid');
const activitiesTitle = document.getElementById('activitiesTitle');
const newIdeasBtn = document.getElementById('newIdeasBtn');
const emptyState = document.getElementById('emptyState');
const activitiesSection = document.getElementById('activitiesSection');

// ===== Initialize Application =====
function init() {
    // Event Listeners für Altersauswahl-Buttons (F1)
    ageButtons.forEach(button => {
        button.addEventListener('click', () => handleAgeSelection(button));
    });

    // Event Listener für "Neue Ideen" Button (F4)
    newIdeasBtn.addEventListener('click', loadNewActivities);

    // Initial verstecke Aktivitätsbereich
    activitiesSection.style.display = 'none';
}

// ===== F1: Altersauswahl =====
function handleAgeSelection(button) {
    const selectedAge = button.dataset.age;

    // Entferne "active" von allen Buttons
    ageButtons.forEach(btn => btn.classList.remove('active'));

    // Füge "active" zum gewählten Button hinzu
    button.classList.add('active');

    // Setze aktuelle Altersgruppe
    currentAgeGroup = selectedAge;

    // Reset displayedActivityIds
    displayedActivityIds = [];

    // Zeige Aktivitäten
    loadActivities();

    // Zeige Aktivitätsbereich
    activitiesSection.style.display = 'block';

    // Scroll zum Aktivitätsbereich
    activitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== F3: Aktivitäten anzeigen =====
function loadActivities() {
    if (!currentAgeGroup) return;

    // Filtere Aktivitäten nach Altersgruppe
    const filteredActivities = activities.filter(
        activity => activity.ageGroup === currentAgeGroup
    );

    // Entferne bereits angezeigte Aktivitäten
    const availableActivities = filteredActivities.filter(
        activity => !displayedActivityIds.includes(activity.id)
    );

    // Wenn keine neuen Aktivitäten mehr verfügbar, reset
    let activitiesToShow;
    if (availableActivities.length === 0) {
        displayedActivityIds = [];
        activitiesToShow = getRandomActivities(filteredActivities, 5);
    } else {
        activitiesToShow = getRandomActivities(availableActivities, 5);
    }

    // Speichere angezeigte IDs
    displayedActivityIds.push(...activitiesToShow.map(a => a.id));

    // Update Titel
    const ageGroupLabel = ageGroups[currentAgeGroup].label;
    activitiesTitle.textContent = `Aktivitätsideen für ${ageGroupLabel}`;

    // Rendere Aktivitäten
    renderActivities(activitiesToShow);

    // Verstecke Empty State
    emptyState.classList.add('hidden');
}

// ===== F4: Neue Ideen laden =====
function loadNewActivities() {
    if (!currentAgeGroup) return;

    // Fade-out Animation
    activitiesGrid.style.opacity = '0';

    setTimeout(() => {
        loadActivities();
        // Fade-in Animation
        activitiesGrid.style.opacity = '1';
    }, 300);
}

// ===== Helper: Zufällige Aktivitäten auswählen =====
function getRandomActivities(activityArray, count) {
    const shuffled = [...activityArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// ===== Aktivitäten rendern =====
function renderActivities(activitiesArray) {
    // Leere Grid
    activitiesGrid.innerHTML = '';

    // Erstelle Karten für jede Aktivität
    activitiesArray.forEach(activity => {
        const card = createActivityCard(activity);
        activitiesGrid.appendChild(card);
    });
}

// ===== Aktivitätskarte erstellen =====
function createActivityCard(activity) {
    const card = document.createElement('div');
    card.className = 'activity-card';

    // Titel
    const title = document.createElement('h3');
    title.textContent = activity.title;

    // Meta-Informationen (Badges)
    const meta = document.createElement('div');
    meta.className = 'activity-meta';

    const ageBadge = document.createElement('span');
    ageBadge.className = 'badge badge-age';
    ageBadge.textContent = ageGroups[activity.ageGroup].label;

    const timeBadge = document.createElement('span');
    timeBadge.className = 'badge badge-time';
    timeBadge.textContent = `⏱️ ${activity.duration}`;

    meta.appendChild(ageBadge);
    meta.appendChild(timeBadge);

    // Beschreibung
    const description = document.createElement('p');
    description.className = 'activity-description';
    description.textContent = activity.description;

    // Materialien
    const materials = document.createElement('div');
    materials.className = 'activity-materials';

    const materialsTitle = document.createElement('h4');
    materialsTitle.textContent = '📦 Material:';

    const materialsList = document.createElement('ul');
    activity.materials.forEach(material => {
        const li = document.createElement('li');
        li.textContent = material;
        materialsList.appendChild(li);
    });

    materials.appendChild(materialsTitle);
    materials.appendChild(materialsList);

    // Zusammenbauen
    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
    card.appendChild(materials);

    return card;
}

// ===== Starte Application =====
document.addEventListener('DOMContentLoaded', init);

// ===== CSS Transition für Fade-Effekt =====
activitiesGrid.style.transition = 'opacity 0.3s ease-in-out';
