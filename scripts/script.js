$(document).ready(() => {
  const leftButton = $(".left");
  const rightButton = $(".right");

  const disableButtons = () => {
    leftButton.prop("disabled", true);
    rightButton.prop("disabled", true);
  };

  const enableButtons = () => {
    leftButton.prop("disabled", false);
    rightButton.prop("disabled", false);
  };

  leftButton.click(() => {
    disableButtons();
    const currentTopImage = $("#top-row .image:first-child");
    const currentBottomImage = $("#bottom-row .image:first-child");
    currentTopImage
      .appendTo("#top-row")
      .hide()
      .fadeIn(500, () => {
        enableButtons();
      });
    currentBottomImage.appendTo("#bottom-row").hide().fadeIn(500);
  });

  rightButton.click(() => {
    disableButtons();
    const currentTopImage = $("#top-row .image:last-child");
    const currentBottomImage = $("#bottom-row .image:last-child");
    currentTopImage
      .prependTo("#top-row")
      .hide()
      .fadeIn(500, () => {
        enableButtons();
      });
    currentBottomImage.prependTo("#bottom-row").hide().fadeIn(500);
  });
});
