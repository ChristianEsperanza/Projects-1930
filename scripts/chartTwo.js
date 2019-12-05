/**
 * On opening the records page, the function targets the first container 
 * and animates it corresponding to the progress made by the user.
 */

const progress = document.querySelector("#progress");

var bar = new ProgressBar.SemiCircle(progress, {
  strokeWidth: 6,
  color: '##FFE977',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
    alignToBottom: false
  },
  from: {color: '#FFE977'},
  to: {color: '#ED6A5A'},

  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 30);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }

    bar.text.style.color = state.color;
  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(0.8); 
