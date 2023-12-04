  $('.form-contact').validate({

    rules:{
        email: {
            required: true,
            email: true
        },

        message: {
            required: true
           
        }
        
    },

    messages: {
        email: {
            required: 'Введите email',
            email: 'отсутствует символ @'
        },

        message: {
            required: 'Поле не должно быть пустым'
           
        }

    },

    submitHandler: function(form){
        ajaxFormSubmit();
    }

  });



  //*************************************************** */
	// Функция AJAX запрса на сервер

	function ajaxFormSubmit() {

		let string = $(".form-contact").serialize(); // Соханяем данные введенные в форму в строку.

		//Формируем ajax запрос
		$.ajax({
			type: "POST", // Тип запроса - POST
			url: "php/mail.php", // Куда отправляем запрос
			data: string, // Какие даные отправляем, в данном случае отправляем переменную string

			// Функция если все прошло успешно
			success: function (html) {
				$(".form-contact").slideUp(800);
				$('#answer').html(html);
			}
		});
		// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
		return false;
	}



