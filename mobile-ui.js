function activateNavItems(nav) {
  if (!isNodeListEmpty(nav)) {
    nav.forEach((item) => activateNavBar(item));
  }
}

function activateNavBar(nav) {
  const navItems = nav.querySelectorAll(".main-nav-item");
  const selectedItem = nav.querySelector(".main-nav-item");
  selectedItem.classList.add("active");

  if (!isNodeListEmpty(navItems)) {
    navItems.forEach((item) => activateNavItem(item));
  }
}

function activateNavItem(item) {
  item.addEventListener("click", itemSelected.bind(this, item));
  item.addEventListener("mouseenter", activateHover);
  item.addEventListener("mouseleave", deactivateHover);
}

function itemSelected(item) {
  resetActive(item, "main-nav-container", "main-nav-item", "active");
  item.classList.add("active");
}

function resetActive(item, parentClass, siblingClass, classToRemove) {
  const itemContainer = findAncestorByClass(item, parentClass);
  const els = itemContainer.querySelectorAll(`.${siblingClass}`);
  els.forEach((el) => el.classList.remove(classToRemove));
}

// Find the ancestor of an element by it class name
function findAncestorByClass(el, clsName) {
  if (doesElContainClass(el, clsName)) {
    return el;
  } else {
    if (!isBodyEl(el)) {
      return findAncestorByClass(el.parentElement, clsName);
    }
  }
}

// Check if an element contain the specified class name
function doesElContainClass(el, clsName) {
  return Array.from(el.classList).includes(clsName);
}

function isBodyEl(el) {
  return el === document.querySelector("body");
}

function isNodeListEmpty(node) {
  return node.length === 0;
}

// Hover functions

function activateHover(e) {
  setTimeout(removeOnHover.bind(this, e.target), 900);
}

function deactivateHover(e) {
  e.target.classList.remove("on-hover");
}

function removeOnHover(target) {
  if (target.matches(":hover") && !doesElContainClass(target, "active")) {
    target.classList.add("on-hover");
  }
}

export default function activateAllNavBar() {
  const navBar = document.querySelectorAll(".main-nav");
  activateNavItems(navBar);
}
