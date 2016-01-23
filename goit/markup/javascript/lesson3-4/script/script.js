var app = {

  createElement: function(params) {
    var element = document.createElement(params.tagName);

    if (params.inputType){
      element.setAttribute('type', params.inputType);
    }

    if (params.className){
      element.className = params.className;
    }

    if (params.content){
      element.innerHTML = params.content;
    }

    if (params.parentElement){
      params.parentElement.appendChild(element);
    }

    return element;
  },

  generateQuestions: function(questionsAmount, answersAmount) {

    for (var i = 1; i < questionsAmount + 1; i++) {

      this.createElement({
        tagName: 'h3',
        content: i+'. Question №1',
        parentElement: form
      });

      for (var userAnswers = 0; userAnswers < answersAmount; userAnswers++) {

        var wrap = this.createElement({
          tagName: 'div',
          className: 'checkbox',
          parentElement: form
        })

        var label = this.createElement({
          tagName: 'label',
          parentElement: wrap
        });

        var checkbox = this.createElement({
          tagName: 'input',
          inputType: 'checkbox',
          parentElement: label
        });

        var text = this.createElement({
          tagName: 'span',
          content: 'Answer №' + (userAnswers + 1),
        })

        label.appendChild(text)

      }

    };

  }

}

