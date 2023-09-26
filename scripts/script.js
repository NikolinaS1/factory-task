$(document).ready(() => {
  const leftButton = $(".left");
  const rightButton = $(".right");
  let isAnimating = false;

  const disableButtons = () => {
    leftButton.prop("disabled", true);
    rightButton.prop("disabled", true);
  };

  const enableButtons = () => {
    leftButton.prop("disabled", false);
    rightButton.prop("disabled", false);
  };

  leftButton.on("click", () => {
    if (!isAnimating) {
      isAnimating = true;
      disableButtons();

      const topRow = $("#top-row");
      const bottomRow = $("#bottom-row");

      const topRowImageWidth = topRow.find(".image:first-child").outerWidth();
      const bottomRowImageWidth = bottomRow
        .find(".image:first-child")
        .outerWidth();

      topRow.css("transition", "transform 0.5s ease-in-out");
      bottomRow.css("transition", "transform 0.5s ease-in-out");
      topRow.css("transform", `translateX(-${topRowImageWidth}px)`);
      bottomRow.css("transform", `translateX(-${bottomRowImageWidth}px)`);

      setTimeout(() => {
        topRow.find(".image:first-child").appendTo(topRow).hide().fadeIn(500);
        bottomRow
          .find(".image:first-child")
          .appendTo(bottomRow)
          .hide()
          .fadeIn(500);

        topRow.css("transform", "translateX(0)");
        bottomRow.css("transform", "translateX(0)");
        topRow.css("transition", "none");
        bottomRow.css("transition", "none");

        enableButtons();
        isAnimating = false;
      }, 500);
    }
  });

  rightButton.on("click", () => {
    if (!isAnimating) {
      isAnimating = true;
      disableButtons();

      const topRow = $("#top-row");
      const bottomRow = $("#bottom-row");

      const topRowImageWidth = topRow.find(".image:last-child").outerWidth();
      const bottomRowImageWidth = bottomRow
        .find(".image:last-child")
        .outerWidth();

      topRow.css("transition", "transform 0.5s ease-in-out");
      bottomRow.css("transition", "transform 0.5s ease-in-out");
      topRow.css("transform", `translateX(${topRowImageWidth}px)`);
      bottomRow.css("transform", `translateX(${bottomRowImageWidth}px)`);

      setTimeout(() => {
        topRow.find(".image:last-child").prependTo(topRow).hide().fadeIn(500);
        bottomRow
          .find(".image:last-child")
          .prependTo(bottomRow)
          .hide()
          .fadeIn(500);

        topRow.css("transform", "translateX(0)");
        bottomRow.css("transform", "translateX(0)");
        topRow.css("transition", "none");
        bottomRow.css("transition", "none");

        enableButtons();
        isAnimating = false;
      }, 500);
    }
  });
});
