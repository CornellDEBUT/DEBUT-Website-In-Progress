/* ==========================================================================
   Cornell DEBUT — Main JavaScript
   ==========================================================================

   Each page of the site is its own HTML file, so there is no page-switching
   code here — navigation is plain links and the browser handles it.

   Functions:
   - filterTeam(team, btn) — filters a roster grid by section
                             (members page: subteam; alumni page: class year)
   - flipCard(el)          — flips a member card to its bio        (members page)
   - flipCardKey(e, el)    — keyboard handler for the above        (members page)
   - toggleFaq(el)         — opens/closes a FAQ accordion item     (apply page)
   ========================================================================== */


/**
 * filterTeam
 * Shows only the .subteam-section matching `team`, or all if 'all'.
 * Used by both the members page (subteams) and the alumni page (class years).
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


/**
 * flipCard
 * Flips a member card between its photo and its bio.
 * Only cards for members with a `bio` in the roster data render this wrapper.
 *
 * @param {HTMLElement} el — the .member-flip wrapper that was clicked
 */
function flipCard(el) {
  const flipped = el.classList.toggle('flipped');
  el.setAttribute('aria-pressed', flipped ? 'true' : 'false');
}


/**
 * flipCardKey
 * Lets Enter and Space flip a card, so it works without a mouse.
 *
 * @param {KeyboardEvent} e
 * @param {HTMLElement} el — the .member-flip wrapper
 */
function flipCardKey(e, el) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    flipCard(el);
  }
}
