# mobile-ui

## How to install and use aadheuss-mobile-ui

`npm install aadheuss-mobile-ui`

### on you html file:

- Add "main-nav" as a main container.
- Add either "top" or "bottom" to initiate main container position on the screen.
- Make a child with a class of "main-nav-container".
- Create items inside "main-nav-container" with a class of "main-nav-item".

Example:

```
  <nav class="main-nav bottom">
    <div class="main-nav-container">
      <button class="main-nav-item">item-1</button>
      <button class="main-nav-item">item-2</button>
      <button class="main-nav-item">item-3</button>
      <button class="main-nav-item">item-4</button>
      <button class="main-nav-item">item-5</button>
    </div>
  </nav>
```

### on your javascript file

```
import activateAllNavBar from 'aadheuss-mobile-ui/mobile-ui'.
import 'aadheuss-mobile-ui/mobile-ui.css'.
use activateAllNavBar on you file.
```
