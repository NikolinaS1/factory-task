"use strict";

$(document).ready(function () {
  var leftButton = $(".left");
  var rightButton = $(".right");
  var isAnimating = false;

  var disableButtons = function disableButtons() {
    leftButton.prop("disabled", true);
    rightButton.prop("disabled", true);
  };

  var enableButtons = function enableButtons() {
    leftButton.prop("disabled", false);
    rightButton.prop("disabled", false);
  };

  leftButton.on("click", function () {
    if (!isAnimating) {
      isAnimating = true;
      disableButtons();

      var topRow = $("#top-row");
      var bottomRow = $("#bottom-row");

      var topRowImageWidth = topRow.find(".image:first-child").outerWidth();
      var bottomRowImageWidth = bottomRow.find(".image:first-child").outerWidth();

      topRow.css("transition", "transform 0.5s ease-in-out");
      bottomRow.css("transition", "transform 0.5s ease-in-out");
      topRow.css("transform", "translateX(-" + topRowImageWidth + "px)");
      bottomRow.css("transform", "translateX(-" + bottomRowImageWidth + "px)");

      setTimeout(function () {
        topRow.find(".image:first-child").appendTo(topRow).hide().fadeIn(500);
        bottomRow.find(".image:first-child").appendTo(bottomRow).hide().fadeIn(500);

        topRow.css("transform", "translateX(0)");
        bottomRow.css("transform", "translateX(0)");
        topRow.css("transition", "none");
        bottomRow.css("transition", "none");

        enableButtons();
        isAnimating = false;
      }, 500);
    }
  });

  rightButton.on("click", function () {
    if (!isAnimating) {
      isAnimating = true;
      disableButtons();

      var topRow = $("#top-row");
      var bottomRow = $("#bottom-row");

      var topRowImageWidth = topRow.find(".image:last-child").outerWidth();
      var bottomRowImageWidth = bottomRow.find(".image:last-child").outerWidth();

      topRow.css("transition", "transform 0.5s ease-in-out");
      bottomRow.css("transition", "transform 0.5s ease-in-out");
      topRow.css("transform", "translateX(" + topRowImageWidth + "px)");
      bottomRow.css("transform", "translateX(" + bottomRowImageWidth + "px)");

      setTimeout(function () {
        topRow.find(".image:last-child").prependTo(topRow).hide().fadeIn(500);
        bottomRow.find(".image:last-child").prependTo(bottomRow).hide().fadeIn(500);

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