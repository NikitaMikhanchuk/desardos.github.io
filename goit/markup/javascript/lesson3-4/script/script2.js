
var body = document.querySelector('body');


app.createElement({
  tagName: 'h1',
  content: 'Programming test',
  parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
  tagName: 'button',
  inputType: 'submit',
  className: 'btn btn-primary btn-lg',
  content: 'Check my result',
  parentElement: form
});