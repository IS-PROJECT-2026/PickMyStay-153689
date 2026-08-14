# Project Submission Report

## 1. Student Details

* **Full Name:** Zarian Achieng' Ochieng'
* **GitHub Username:** JUST-ZARI
* **Email:** zarian.ochieng@strathmore.edu

---

## 2. Deployed Project Link

* **Live GitHub Pages URL:**https://is-project-2026.github.io/PickMyStay-153689/

---

## 3. Reflection — Grounded in Your Git History

### A. Your Best Commit

* **Commit URL:** https://github.com/IS-PROJECT-2026/PickMyStay-153689/commit/ed86e9d4349054a8421d7f79c0bd735804760fa9
* **Why this one?** This commit demonstrates a clear Conventional Commit message and contains a focused change for implementing the weighted hotel ranking functionality. The change is isolated to the feature branch and has a clear relationship with the corresponding GitHub issue.

### B. A Mistake or Struggle

* **Link to the evidence:** https://github.com/IS-PROJECT-2026/PickMyStay-153689/pull/23

![alt text](evidence\B-evidence.png)

* **What happened and how did you recover?** I successfully committed the weighted hotel ranking changes locally, but the first attempt to push the `feat/8-weighted-hotel-ranking` branch failed with a `Could not resolve host: github.com` error. The problem was a network/DNS connectivity issue rather than a problem with the commit itself, so I kept the existing commit and retried the push once GitHub connectivity was available instead of creating another unnecessary commit.

### C. A Pull Request You're Proud Of

* **PR URL:** https://github.com/IS-PROJECT-2026/PickMyStay-153689/pull/22

* **What did you check before merging?** I reviewed the changed script.js code to confirm that the price scoring function was implemented correctly, checked that the changes were limited to the intended functionality, and verified that the PR correctly linked to Issue #7 before merging it into main.

### D. One Thing You Would Do Differently

* **What would you change?** I would plan the Conventional Commit types earlier instead of relying heavily on feat and chore. I would intentionally use appropriate types such as style and fix throughout development so that the commit history demonstrates a wider range of professional Git practices from the beginning.

* **Link to the evidence of the original decision:** (https://github.com/IS-PROJECT-2026/PickMyStay-153689/pulls?q=is%3Apr+is%3Aclosed)
![alt text](evidence\milestones-overview.png)

---

## 4. Screenshots of Key GitHub Features

### A. Milestones and Issues

![alt text](evidence\milestones-overview.png)

* **Caption:** Overview of the three development milestones created for PickMyStay

![alt text](evidence\milestone-1-issues.png)

* **Caption:**The Hotel Catalogue & Interface milestone contains issues covering the initial project structure, hotel data, interface components, images, responsiveness, and search/filter functionality.

![alt text](evidence\milestone-2-issues.png)

* **Caption:**The Smart Hotel Ranking milestone contains issues for implementing hotel scoring, weighted ranking, user preference controls, and recommendation results.

![alt text](evidence\milestone-3-issues.png)

* **Caption:**The Booking & Deployment milestone contains issues covering the booking flow, validation, confirmation, GitHub Pages deployment, documentation, and merge conflict evidence.


### B. Project Board

![alt text](evidence\project-board.png)

* **Caption:** The Kanban project board tracks development tasks through the To Do, In Progress, and Done stages.

### C. Branching Architecture

![alt text](evidence\branches.png)

* **Caption:** The repository uses issue-linked feature branches to isolate development work from the protected main branch.

### D. Pull Requests & Traceability

![alt text](evidence\pull-request.png)

* **Caption:** Pull request for developing reusable hotel cards that display key hotel information such as name, price, location, rating, and image.
---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?** Same-line modification conflict.

#### Step 1: Generating the Clash

![alt text](evidence\conflict1-step1.png)

* **Caption:** The merge attempt between the two feature branches produced a conflict because both branches modified the same section of `script.js`.

#### Step 2: Inside the Code Editor (Conflict Markers)

![alt text](evidence\conflict1-step2.png)
* **Caption:** Git identified conflicting changes to the same line in `script.js`. The current branch added the `ranked-card` class while the incoming branch added the `featured-card` class, producing the merge conflict markers.

#### Step 3: Resolution & Clean Merge

![alt text](evidence\conflict-1-resolution.png)

* **Caption:** The conflicting changes were manually combined into a single valid implementation, the conflict markers were removed, and the merge was completed successfully with a clean working tree.

### Conflict 2 — Different Cause

**What cause did you use?** Delete/modify conflict.

**Why does this cause trigger a conflict?** This conflict occurs when one branch modifies a file while another branch deletes the same file. Git cannot automatically determine whether the file should be kept with the modifications or deleted, so manual resolution is required.


![alt text](evidence\conflict-2.1.png)
![alt text](evidence\conflict-2.2.png)

* **Caption:**   The merge produced a delete-versus-modify conflict because `conflict2.txt` was modified on one branch while it was deleted on the other branch. Git required the conflicting file state to be resolved manually.

### Conflict 3 — Different Cause

**What cause did you use?** Rename vs Modify conflict.

**Why does this cause trigger a conflict?** This conflict occurred because one branch renamed conflict3.txt to conflict3-renamed.txt, while another branch modified the original conflict3.txt. Git could not automatically reconcile the file rename with the modification made to the original file, so it reported a rename/modify conflict that required manual resolution.
The conflict was created by merging conflict-3-rename into conflict-3-modify. The conflict was then resolved manually and the merge was completed successfully.

![alt text](evidence\conflict-3.1.png)
![alt text](evidence\conflict-3.2.png)


* **Caption:** Rename vs Modify conflict showing Git's conflict message before manual resolution.
---


