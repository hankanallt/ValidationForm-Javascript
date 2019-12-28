 function trigger()

	{

	document.getElementById("hover").addEventListener("mouseover", popup);

	function popup()

	{

	alert("Welcome to my WebPage!!!");

	}

	}
        var divs = new Array();
        divs[0] = "errFirst";
        divs[1] = "errLast";
        divs[3] = "errEmail";
        divs[4] = "errId";
        divs[5] = "errConfirm";
        function Validate()
            
        {
            var inputs = new Array();
            inputs[0] = document.getElementById(" first ").value;
            inputs[1] = document.getElementById(" last ").value;
            inputs[2] = document.getElementById(" email ").value;
            inputs[3] = document.getElementById(" id ").value;
            inputs[4] = document.getElementById(" password ").value;
            inputs[5] = document.getElementById(" confirm ").value;
            var errors = new Array();
            errors[0] = "<span style='color:red'>Please enter your first name!</span>";
            errors[1] = "<span style='color:red'>'Please enter your last name!'</span>";
            errors[2] = "<span style='color:red'>'Please enter your email'</span>";
            errors[3] = "<span style='color: red'>'PLease enter your user Id'</span>";
            errors[4] = "<span style='color: red'>'Please enter your password'</span>";
            for(i in inputs);
            {
                var errMessage = errors[i];
                var divs = divs[i];
              if (inputs[i] == "")
        	document.getElementById(div).innerHTML = errMessage;
          else if (i==2)
                {
                  var atPostion = inputs[i].indexOf("@");
                  var dotPostion = inputs[i].indexOf(".");
              if (atpos<1 || dotpos<atpos+2 || dotpos+2>=inputs[i].length)
              document.getElementById("errorEMail").innerHTML = 
              "<span style='color:red'>Enter a valid email address!</span>";
               else
            	document.getElementById(div).innerHTML = "OK!";
                }
                else if (i==5)
        {
          var first = document.getElementById('password').value;
          var second = document.getElementById('confirm').value;
          if (second != first)
        	document.getElementById('errConfirm').innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
          else
       		document.getElementById(div).innerHTML = "OK!";
        }
        else
        	document.getElementById(div).innerHTML = "OK!";
       }
     }
            
       function finalValidate()
        {
          var count = 0;
          for(i=0;i<6;i++)
          {
            var div = divs[i];
            if(document.getElementById(div).innerHTML == "OK!")
            count = count + 1;
          }
          if(count == 6)
          	document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
        }
        
    