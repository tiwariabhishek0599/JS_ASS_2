const movingNumber = document.querySelector(".main");

function moving(){
  addEventListener("mousemove", (main) => {
    movingNumber.innerHTML = `
        <div class="counter">
        <h4>Mouse X Position(px)</h4>
        ${main.clientX}
      </div>
      <div class="counter">
        <h4>Mouse Y Position(px)</h4>
        ${main.clientY}
      </div>
`;
});
}