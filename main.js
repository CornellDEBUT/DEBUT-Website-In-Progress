/* ==========================================================================
   Cornell DEBUT — Main JavaScript
   ==========================================================================

   Each page of the site is its own HTML file, so there is no page-switching
   code here — navigation is plain links and the browser handles it.

   Functions:
   - filterTeam(team, btn) — filters the members grid by subteam  (members page)
   - toggleFaq(el)         — opens/closes a FAQ accordion item    (apply page)
   ========================================================================== */


/**
 * filterTeam
 * Shows only the subteam section matching `team`, or all if 'all'.
 * Updates the active filter button.
 *
 * @param {string} team — data-team attribute value, or 'all'
 * @param {HTMLElement} btn — the clicked filter button
 */
function filterTeam(team, btn) {
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide subteam sections
  document.querySelectorAll('.subteam-section').forEach(section => {
    section.style.display =
      (team === 'all' || section.dataset.team === team) ? 'block' : 'none';
  });
}


/**
 * toggleFaq
 * Toggles the open/closed state of a FAQ accordion item.
 *
 * @param {HTMLElement} questionEl — the .faq-q element that was clicked
 */
function toggleFaq(questionEl) {
  questionEl.parentElement.classList.toggle('open');
}
