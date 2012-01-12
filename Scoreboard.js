/**
 * Created by Steven Schermerhorn.
 * Date: 1/7/12
 * Time: 12:26 PM
 */
Scoreboard = function($node) {
	var state = {
		name: $node.attr('scoreboard'),
		value: 33
	};

	var numberOfDigits = Math.max(parseInt($node.attr('digits')), 1);
	var digitWidth = parseInt($node.attr('digitWidth'));
	var width = (digitWidth  * numberOfDigits) + (4 * (numberOfDigits - 1));
	var digitHeight = parseInt($node.attr('digitHeight'));
	var thickness = parseInt($node.attr('thickness'));
	var halfThickness = thickness / 2;
	var midHeight = digitHeight / 2 ;

	var $canvas = $('<canvas width="' + (width + 1) + '" height="' + (digitHeight + 1) + '"></canvas>');
	$node.append($canvas);
	var context = $canvas[0].getContext('2d');

	var writeDigit = function(left, d) {
		context.save();
		context.translate(0.5, 0.5);
		context.fillStyle = "rgb(0, 255, 0)";

		// 0
		if (d == 0 || d == 2 || d == 3 || d >= 5) {
			context.beginPath();

			context.moveTo(left + halfThickness, 0);
			context.lineTo(left + digitWidth - halfThickness, 0);
			context.lineTo(left + digitWidth - thickness - halfThickness, thickness);
			context.lineTo(left + thickness + halfThickness, thickness);

			context.closePath();
			context.fill();
		}
		//1
		if (d == 0 || d == 4 || d == 5 || d == 6 || d == 8 || d == 9) {
			context.beginPath();

			context.moveTo(left, halfThickness);
			context.lineTo(left, midHeight);
			context.lineTo(left + thickness, midHeight - thickness);
			context.lineTo(left + thickness, thickness + halfThickness);

			context.closePath();
			context.fill();
		}
		//2
		if (d <= 4 || d >= 7) {
			context.beginPath();

			context.moveTo(left + digitWidth, halfThickness);
			context.lineTo(left + digitWidth, midHeight);
			context.lineTo(left + digitWidth - thickness, midHeight - thickness);
			context.lineTo(left + digitWidth - thickness, thickness + halfThickness);

			context.closePath();
			context.fill();
		}
		//3
		if (d == 2 || d == 3 || d == 4 || d == 5 || d == 6 || d == 8 || d == 9) {
			context.beginPath();

			context.moveTo(left + halfThickness, midHeight);
			context.lineTo(left + halfThickness + thickness, midHeight - halfThickness);
			context.lineTo(left + digitWidth - halfThickness - thickness, midHeight - halfThickness);
			context.lineTo(left + digitWidth - halfThickness, midHeight);
			context.lineTo(left + digitWidth - halfThickness - thickness, midHeight + halfThickness);
			context.lineTo(left + halfThickness + thickness, midHeight + halfThickness);

			context.closePath();
			context.fill();
		}
		//4
		if (d == 0 || d == 2 || d == 6 || d == 8) {
			context.beginPath();

			context.moveTo(left, midHeight);
			context.lineTo(left, midHeight - halfThickness + midHeight);
			context.lineTo(left + thickness, midHeight - halfThickness - thickness + midHeight);
			context.lineTo(left + thickness, thickness + midHeight);

			context.closePath();
			context.fill();
		}
		//5
		if (d == 0 || d == 1 || d == 3 || d == 4 || d >= 5) {
			context.beginPath();

			context.moveTo(left + digitWidth, midHeight);
			context.lineTo(left + digitWidth, midHeight - halfThickness + midHeight);
			context.lineTo(left + digitWidth - thickness, midHeight - halfThickness - thickness + midHeight);
			context.lineTo(left + digitWidth - thickness, thickness + midHeight);

			context.closePath();
			context.fill();
		}
		//6
		if (d == 0 || d == 2 || d == 3 || d == 5 || d == 6 || d == 8 || d == 9) {
			context.beginPath();

			context.moveTo(left + halfThickness, digitHeight);
			context.lineTo(left + halfThickness + thickness, digitHeight - thickness);
			context.lineTo(left + digitWidth - halfThickness - thickness, digitHeight - thickness);
			context.lineTo(left + digitWidth - halfThickness, digitHeight);

			context.closePath();
			context.fill();
		}
		context.restore();
	};

	var left = width - digitWidth;
	var currentDigit = state.value % 10;
	var remainingValue = Math.floor(state.value / 10);
	for	(var currentDigitIndex = 0; currentDigitIndex < numberOfDigits; currentDigitIndex++) {
		writeDigit(left, currentDigit);
		left -= digitWidth;
		left -= 4;
		currentDigit = remainingValue % 10;
		remainingValue = Math.floor(remainingValue / 10);
	}
	return state;
};

$(document).ready(function() {
	var scoreboards = $('div[scoreboard]');
	var boards = [];
	for(var i = 0; i < scoreboards.length; i++) {
		var board = new Scoreboard($(scoreboards[i]));
		boards.push(board);
	}

	var i = 0;
});

