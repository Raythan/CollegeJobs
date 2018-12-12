var i, estados = ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"];
var j = 0, alterConfig = 0;
var formBack2 = `<div id='formBack2' style='padding:0.5%;'><form action='index.html'><input type='submit' onclick='~/' value='Voltar!'/></form></div></br>`;
tamanhoTitulo = 30; widthDivMiddleLeft = 5; heightDivMiddleLeft = 5;
function frontEnd(){
	var top = `
	<form style="float:left" onclick="displayBlockConfig()">
		<button style="width:60px" type="button"><img style="width:100%" title="Style Config" src="https://images.emojiterra.com/google/android-oreo/512px/2699.png"/></button>
	</form>
	<form style="float:left" onclick="displayBlockCurriculum()">
	<button style="width:60px" type="button"><img style="width:100%" title="Curriculum Vitae" src="http://prints.ultracoloringpages.com/8167676f801370cf4d65000ec994396c.png"/></button>
	</form>
	<form style="float:left" onclick="displayBlockMotivation()">
	<button style="width:60px" type="button"><img style="width:100%" title="Motivational Channels" src="https://i0.wp.com/www.heversonbarbosa.com/wp-content/uploads/2017/05/seta.png"/></button>
	</form>
	<div id="titulo" style="text-align:center;font-size:200%;padding-top:.5%">
		This is the summary of all my work in college since now.
	</div>
	<div id="separator2" style="border:solid;margin:.5% auto .5% auto;border-radius:6px"></div>
	`,
	middle = `
	<div id="middleLeft" style="width:5%;height:5%;display:block;" title="formTipoSelect">
		<form id="selectionForm" method="GET" style="height:80%">
			<select onchange="SelectSemester()" multiple id="selectSemester" style="height:100%;width:100%;font-size:20px;text-align:center;">
				<option value="0">Select some...</option>
				<option value="1">1º Semester</option>
				<option value="2">2º Semester</option>
				<option value="3">3º Semester</option>
				<option value="4">4º Semester</option>
				<option value="5">5º Semester</option>
				<option value="6">6º Semester</option>
				<option value="7">7º Semester</option>
				<option value="8">8º Semester</option>
			</select>
		</form>
	</div>
	
	<div id="middleRight" style="display:none;margin-bottom:10%;border-radius:3px;border:2px solid;margin: 0px auto auto .5%">
		<div id="separator3" style="display:block"></div>
		<div id="divFormsForSelect" style="display:none">
		</div>
	</div>
	
	`, bottom = `
		<div id="footer" style='width:100%;text-align:center;padding-bottom:1%;bottom:0;font-size:20px;position:fixed'>
			<div id="separator4" style="border:solid;margin:.5% auto .5% auto;border-radius:6px"></div>
			<div style="text-align:center;font-size:80%;width:40%;float:left">
				<strong>My private email contact:</strong> raythan100@yahoo.com.br</br>
				<strong>My github repository:</strong><a href="https://github.com/Raythan" style="text-decoration:none" target="_blank"> https://github.com/Raythan</a></br>
			</div>
			<div style="width:60%;float:left">
				This is a free code developed by:</br>
				Raythan Padovani Abreu Machado
			</div>
		</div>
	`;
	const frontSending = {
		top: top,
		middle: middle,
		bottom: bottom
	};
	const insert = `
		${frontSending.top}
		${frontSending.middle}
		${frontSending.bottom}
	`;
	document.body.innerHTML = insert;
	styleTitulo();	
	styleDivMiddleLeft();
}

/****************************************************************************************************
*						THIS IS THE FORM TO ALTERATE DURING COLLEGE									*
****************************************************************************************************/

function SelectSemester(){
	var pickSelect = document.getElementById("selectSemester").value;
	displayBlockMiddleRight();
	if(pickSelect==1){
		formSem1();
	}else if(pickSelect==2){
		formSem2();
	}else if(pickSelect==3){
		formSem3();
	}else if(pickSelect==4){
		formSem4();
	}else if(pickSelect==5){
		formSem5();
	}else if(pickSelect==6){
		formSem6();
	}else if(pickSelect==7){
		formSem7();
	}else if(pickSelect==8){
		formSem8();
	}else if(pickSelect==0){
		formSem0();
	}
}


function formSem0(){
	displayNoneMiddleRight();
	displayNoneFooter();
	document.getElementById("divFormsForSelect").innerHTML = "";
}
function formSem1(){	
	document.getElementById("divFormsForSelect").innerHTML = "That's really bad, cause no exercises on first semester...";
	
}
function formSem2(){
	var formSecondSemester = `
		<fieldset><legend>Second semester exercises</legend>
			<form>
			<p>
				Ana's teacher exercises. || >>> Second semester <<<</br>	
			<dl>
				These buttons will take you to one of my pages on gitHub =)
				<dt>
					<input class='formSelecao' type='submit' onclick='cppGitHubSecondSemester1()' value='Lista 3: Inciso 1!'/></br>
					<input class='formSelecao' type='submit' onclick='cppGitHubSecondSemester2()' value='Lista 3: Inciso 2!'/></br>
					<input class='formSelecao' type='submit' onclick='cppGitHubSecondSemester3()' value='Lista 3: Inciso 3!'/></br>
					<input class='formSelecao' type='submit' onclick='cppGitHubSecondSemester4()' value='Lista 3: Inciso 4!'/></br>
					<input class='formSelecao' type='submit' onclick='cppGitHubSecondSemester5()' value='Lista Matrix: 4 Incisos!'/></br>
				</dt></br>
					<dd>
						Basically this is some examples of exercises proposes in my college classroom, some beginners and others with intermediate difficulty!
					</dd>
			</dl>
			</p><hr>
			<p>
				Marta's teacher exercises. || >>> Second semester <<<</br></br>
				<input class='formSelecao' type='submit' onclick='formBin()' value='Calculate Binary'/></br>
				<input class='formSelecao' type='submit' onclick='formRaizNewton()' value='Calculate Newton root'/></br>
				<input class='formSelecao' type='submit' onclick='formCalcParalelo()' value='Calculate N parallel resistors'/></br>
				<input class='formSelecao' type='submit' onclick='formCalcGrauN()' value='Calculate of N-degree polynomial'/></br>
				<input class='formSelecao' type='submit' onclick='formCalcMatrizTriangulo()' value='Show what type of Matrix >> \"GET BETTER\"'/>
			</p>
			</form>
		</fieldset></br></br></br></br>
	`;
	const model = {
		form: formSecondSemester
	}
	const insImp = `
		${model.form}
	`
	document.getElementById("divFormsForSelect").innerHTML = insImp;
}
function formSem3(){
	var formThirdSemester = `
	<fieldset><legend>Third semester exercises</legend>
		<form>
			<p>
				Rodrigo Bonacin's teacher exercises. || >>> Third semester <<<
			</p>
			<p>
				<input class='formSelecao' type='submit' onclick='listaTags()' value="List of tags for the first test!"/></br>
				<input class='formSelecao' type='submit' onclick='edpHtml1()' value='First proposal exercises on HTML!'/></br>
				<input class='formSelecao' type='submit' onclick='edpHtml2()' value='Second proposal exercises on HTML!'/></br>
				<input class='formSelecao' type='submit' onclick='edpHtml3()' value='Third proposal exercise on HTML!'/>
			</p><hr>
			<p>
				Luis Mariano's teacher exercises. || >>> Third semester <<<</br></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterMariano1()' value='A mixed of .cpp exercises!'/></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterMariano2()' value='Construct, Pointers .cpp exercises!'/></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterMariano3()' value='Stack exercises!'/></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterMariano4()' value='Queue exercises!'/>
			</p><hr>
			<p>
				Ana's teacher exercises. || >>> Third semester <<<
			</p>
			<p>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterAna1()' value='Interdisciplinary Project-Exercise1'/></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterAna2()' value='Interdisciplinary Project-Exercise2'/></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterAna3()' value='Interdisciplinary Project-Exercise3 - Recursion'/></br>
				<input class='formSelecao' type='submit' onclick='cppGitHubThirdSemesterAna4()' value='Interdisciplinary Project-Exercise4 - Miner'/>
			</p>
			<dl>
				These buttons will take you to one of my pages on gitHub =)
					<dd>
						Basically this is some examples of exercises proposes in classroom, some beginners and others with intermediate difficulty!
					</dd>
			</dl>
		</form>
	</fieldset></br></br></br></br>
	`;
	const model = {
		form: formThirdSemester
	}
	const insImp = `
		${model.form}
	`
	document.getElementById("divFormsForSelect").innerHTML = insImp;
}

function formSem4(){
	document.getElementById("divFormsForSelect").innerHTML = "This page is on going during the college!";
}
function formSem5(){
	document.getElementById("divFormsForSelect").innerHTML = "This page is on going during the college!";
}
function formSem6(){
	document.getElementById("divFormsForSelect").innerHTML = "This page is on going during the college!";
}
function formSem7(){
	document.getElementById("divFormsForSelect").innerHTML = "This page is on going during the college!";
}
function formSem8(){
	document.getElementById("divFormsForSelect").innerHTML = "This page is on going during the college!";
}
/***************************************************************************************************/

/****************************************************************************************************
*						THESE ARE ANCHORAGE BUTTONS FUNCTIONS										*
****************************************************************************************************/
function listaTags(){
	window.open("https://github.com/Raythan/hello-world/blob/master/listaTagsHTML");
}
function cppGitHubSecondSemester1(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/inciso1.cpp");
}
function cppGitHubSecondSemester2(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/inciso2.cpp");
}
function cppGitHubSecondSemester3(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/inciso3.cpp");
}
function cppGitHubSecondSemester4(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/inciso4.cpp");
}
function cppGitHubSecondSemester5(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/exerciseListMatrix4Resolutions.cpp");
}
function cppGitHubThirdSemesterMariano1(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/alotThingsToWork.cpp"); 
}
function cppGitHubThirdSemesterMariano2(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/constructJobs.cpp_OnGoing"); 
}
function cppGitHubThirdSemesterMariano3(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/simpleStack.cpp"); 
}
function cppGitHubThirdSemesterMariano4(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/simpleQueue.cpp");
}
function cppGitHubThirdSemesterAna1(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/interdisciplinaryProject1"); 
}
function cppGitHubThirdSemesterAna2(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/interdisciplinaryProject2"); 
}
function cppGitHubThirdSemesterAna3(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/recursividade_somando_indices_vetor"); 
}
function cppGitHubThirdSemesterAna4(){
	window.open("https://github.com/Raythan/cppWorkClass/blob/master/miner.cpp"); 
}
/**********************************************************************************************************/


/****************************************************************************************************
*									STYLE ALTERATION FUNCTION										*
****************************************************************************************************/
function styleTitulo(){
	var divTitulo = document.getElementById("titulo");
	
	if(divTitulo.style.width != "100%"){
		divTitulo.style.width = tamanhoTitulo + '%';
		setTimeout("styleTitulo()",10)
		tamanhoTitulo+=1;
	}
}

function styleDivMiddleLeft(){
	var divMiddleLeft = document.getElementById("middleLeft");
	
	if(divMiddleLeft.style.width != "30%"){
		divMiddleLeft.style.width = widthDivMiddleLeft + '%';
		setTimeout("styleDivMiddleLeft()",150)
		widthDivMiddleLeft+=.5;
	}
	if(divMiddleLeft.style.height != "38%"){
		divMiddleLeft.style.height = heightDivMiddleLeft + '%';
		setTimeout("styleDivMiddleLeft()",150)
		heightDivMiddleLeft+=.5;
	}
}

function displayBlockMiddleRight(){
	document.getElementById("middleLeft").style.float = "left";
	
	document.getElementById("middleRight").style.float = "left";
	document.getElementById("middleRight").style.display = "block";
	document.getElementById("middleRight").style.padding = ".5%";
	document.getElementById("middleRight").style.width = "65%";
	displayBlockDivFomsForSelect();
	displayBlockSeparator3();
	displayBlockFooter();
}
function displayBlockDivFomsForSelect(){
	document.getElementById("divFormsForSelect").style.display = "block";
	document.getElementById("divFormsForSelect").style.float = "left";
}
function displayBlockSeparator3(){
	document.getElementById("separator3").style.display = "block";
	document.getElementById("separator3").style.height = "100%";
	document.getElementById("separator3").style.borderLeft = "3px solid";
	document.getElementById("separator3").style.float = "left";
}

function displayBlockFooter(){
	document.getElementById("footer").style.backgroundColor = "#000000";
	document.getElementById("footer").style.color = "#FFFFFF";		
}

function displayNoneFooter(){
	document.getElementById("footer").style.backgroundColor = "#FFFFFF";
	document.getElementById("footer").style.color = "#000000";
}

function displayNoneMiddleRight(){
	document.getElementById("middleLeft").style.float = "";

	document.getElementById("middleRight").style.display = "none";
	displayNoneDivFormsForSelect();
	displayNoneSeparator3();
}
function displayNoneDivFormsForSelect(){
	document.getElementById("divFormsForSelect").style.display = "none";
}
function displayNoneSeparator3(){
	document.getElementById("separator3").style.display = "none";
}

function displayBlockMotivation(){
	var divFormsForSelect = document.getElementById("divFormsForSelect");
	
	var infoToInsert = `
		<div id="motivateAnchorage" class="motivation">
			<table class="motivation">
				<tr>
					<span class="motivation">These are Brazilian Channels:</span>
				</tr>
				<tr>
					<td>
						<form action="https://www.youtube.com/channel/UCF1r_w8jqSdr7hcLmVO-42w" target="_blank">
							<button type="submit"><img style="width:100%" title="Motivação Grid" src="https://yt3.ggpht.com/a-/AN66SAzVwG64401mWcr8Yj4mXr61uw4Quyqgjzy9lQ=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
					<td>
						<form action="https://www.youtube.com/user/audiofive" target="_blank">
							<button type="submit"><img style="width:100%" title="Nando Pinheiro" src="https://yt3.ggpht.com/a-/AN66SAwUcK_X23kjzcNgiKi_t1EQTLAtV3W9SI3Jmw=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
					<td>
						<form action="https://www.youtube.com/channel/UCTHEfzCKG-VfKt1EaSMPQbA" target="_blank">
							<button type="submit"><img style="width:100%" title="Motivação Feminina" src="https://yt3.ggpht.com/a-/AN66SAxR32VCxqdxymD4L-Cqqw4hNTs4zVK_vnmWXQ=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
					<td>
						<form action="https://www.youtube.com/user/marombapedreiras" target="_blank">
							<button type="submit"><img style="width:100%" title="B Motivation" src="https://yt3.ggpht.com/a-/AN66SAw5FD7KtYZRtiZ73UZPJi6-lHasPKI2p2pmEA=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
				</tr>
				<tr>
					<td>
						<form action="https://www.youtube.com/channel/UCzMH-coD7FkCSuOUrfUwmBg" target="_blank">
							<button type="submit"><img style="width:100%" title="ALFAFLIX MOTIVACIONAL STUDY
" src="https://yt3.ggpht.com/a-/AN66SAwLDnWS4XZZF0J_Z0-3y2wTO34ovls-_Z6OSA=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
					<td>
						<form action="https://www.youtube.com/user/papodelider" target="_blank">
							<button type="submit"><img style="width:100%" title="Wendel Carvalho" src="https://yt3.ggpht.com/a-/AN66SAwFTdkbndKfbcVR2FNJQtZYTqpfBpUX_4Volw=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
					<td>
						<form action="https://www.youtube.com/channel/UClJtg-ez8iMwq_wRbX7ZttQ" target="_blank">
							<button type="submit"><img style="width:100%" title="Thiago Rodrigo" src="https://yt3.ggpht.com/a-/AN66SAym6OfiJkT4Lvikl26VkABMNoUdL4v8RVOSng=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
					<td>
						<form action="https://www.youtube.com/user/caiocarneiromv" target="_blank">
							<button type="submit"><img style="width:100%" title="Caio Carneiro" src="https://yt3.ggpht.com/a-/AN66SAx8hO5dC2G5G7mDqGpJmS8cYPD9VARileMoPQ=s288-mo-c-c0xffffffff-rj-k-no"/></button>
						</form>
					</td>
				</tr>
			</table>
		</div>
		<div>
			</br></br>If you have another sugestions please contact me...
		</div>
	`;
	const infoIns = {
		info: infoToInsert
	}
	const markup = ` ${infoIns.info} `;
	
	if(middleRight.style.display == "none"){
		displayBlockMiddleRight();
		divFormsForSelect.innerHTML = markup;
	}else{
		displayNoneMiddleRight();
		divFormsForSelect.innerHTML = "";
	}
}

function displayBlockConfig(){	
	var middleLeft = document.getElementById("middleLeft"),
	middleLeftValue = document.getElementById("middleLeft").getAttribute("title"),
	titulo = document.getElementById("titulo"),
	middleRight = document.getElementById("middleRight");
	configNow = `
		<form id="configForm">
			<fieldset style="width:80%">
			<p><input id="configStyle1" type="color" value="#FFFFFF" name="configStyle1"/> Background Title Color</p>
			<p><input id="configStyle2" type="color" name="configStyle2"/> Font Title Color</p>
			<p><input id="configStyle3" type="color" name="configStyle3"/> Page Font Color</p>
			<p><input id="configStyle4" type="color" value="#FFFFFF" name="configStyle4"/> Page background</p>
			</fieldset>
		</form>
	`,
	configBack = `
		<form id="selectionForm" method="GET" style="height:80%">
			<select onchange="SelectSemester()" multiple id="selectSemester" style="height:100%;width:100%;font-size:20px;text-align:center;">
				<option value="0">Select some...</option>
				<option value="1">1º Semester</option>
				<option value="2">2º Semester</option>
				<option value="3">3º Semester</option>
				<option value="4">4º Semester</option>
				<option value="5">5º Semester</option>
				<option value="6">6º Semester</option>
				<option value="7">7º Semester</option>
				<option value="8">8º Semester</option>
			</select>
		</form>
	`;
	
	const info = {
		info1: configNow,
		info2: configBack
	}
	const insert1 = ` 
		${info.info1} 
	`,
	insert2 = `
		${info.info2}
	`;
	
	var configAlterated = {
		configStyle1: document.getElementById("configStyle1"), // background title color
		configStyle2: document.getElementById("configStyle2"), // title color
		configStyle3: document.getElementById("configStyle3"), // page font color
		configStyle4: document.getElementById("configStyle4") // page background
	}
	
	if(middleLeftValue=="formTipoSelect"){
		middleLeft.innerHTML = insert1;
		middleLeft.setAttribute("title", "formTipoSelect1");
		
	}else{
		middleLeft.innerHTML = insert2;
		middleLeft.setAttribute("title", "formTipoSelect");
		titulo.style.background = configAlterated.configStyle1.value;
		titulo.style.color = configAlterated.configStyle2.value;
		middleRight.style.background = configAlterated.configStyle4.value;
		middleRight.style.color = configAlterated.configStyle3.value;
	} 
}

function displayBlockCurriculum(){
	var curriculo = `
		<div id="curriculum">
			<span class="nomePrincipal">Raythan Padovani Abreu Machado</span></br></br>
			
			<span class="titulo">Endereço:</span> <span class="subTitulo">Rua Prudente de Moraes, Jardim das Acácias, Várzea Paulista/SP</span></br>
			<span class="titulo">Nascimento:</span> <span class="subTitulo">14/03/1992</span> <span class="titulo">Habilitação:</span> <span class="subTitulo">A-B</span></br>
			<span class="titulo">Telefone:</span> <span class="subTitulo">(11) 99772-3517 / (11) 99840-7091</span></br>
			<span class="titulo">E-mail:</span> <span class="subTitulo">raythan100@yahoo.com.br</span></br>
			<span class="titulo">Repositório GitHub:</span> <span class="subTitulo">https://github.com/Raythan</span></br>
			<span class="titulo">Repositório Repl.it:</span> <span class="subTitulo">https://repl.it/@Ishikawaa/</span></br>
			<span class="titulo">Ambiente de teste:</span> <span class="subTitulo">https://raythan7.000webhostapp.com/</span></br></br>
			
			<span class="titulo">Objetivo</span></br>
			<span class="subTitulo">Estágio/programador/analista/desenvolvedor de sistemas</span></br></br>

			<span class="titulo">Formação</span></br>
			<span class="subTitulo">Superior - Ciências da Computação (Cursando 4º Semestre)</span></br>
			<span class="subTitulo">Técnico - Mecatrônica (2015)</span></br>

			<span class="titulo">Conhecimentos Extracurriculares</span></br>
			<span class="subTitulo">- Desenvolvimento – HTML5, PHP, CSS3, Javascript(ES6), C++, ASP .NET, SQL Server, MySQL.</span></br>
			<span class="subTitulo">- Algoritmo e lógica de programação.</span></br>
			<span class="subTitulo">- Orientação a Objetos.</span></br>
			<span class="subTitulo">- Inglês Intermediário.</span></br>
			<span class="subTitulo">- Montagem e manutenção de computadores.</span></br>
			<span class="subTitulo">- Pacote Office</span></br></br>

			<span class="titulo">Experiência Profissional</span></br>
			<span class="subTitulo">FOXCONN Brasil – (05/2012 – 10/2018)</span></br>
			<span class="subTitulo">Técnico de produção – (Coordenação, auxílio e desenvolvimento de equipes para produção e melhorias; Análise, metragem e correção de falhas)</span></br></br>

			<span class="subTitulo">Marcos Tenir Loiola ME – (02/2011 – 05/2012)</span></br>
			<span class="subTitulo">Auxiliar de topografia – (Cotagem, locação, terraplanagem e desenhista topográfico)</span></br></br>

			<span class="titulo">Qualificações</span>
				
			<span class="subTitulo">- Negociador competente.</span></br>
			<span class="subTitulo">- Planejador eficiente.</span></br>
			<span class="subTitulo">- Flexibilidade.</span></br>
			<span class="subTitulo">- Determinação.</span></br>
			<span class="subTitulo">- Paciência.</span></br>
			<span class="subTitulo">- Dedicação.</span></br>
			<span class="subTitulo">- Disciplina.</span></br>
			<span class="subTitulo">- Eloquência.</span></br>
			<span class="subTitulo">- Ótima capacidade de absorção de informações e transposição em prática das mesmas.</br>
			<span class="subTitulo">- Êxito em implantar, dimensionar, formar, resolver, estabelecer e coordenar equipes de micro e macro porte.</span>
		</div></br></br></br></br>
	`,
	restore = `
		<div id="separator3" style="display:block"></div>
		<div id="divFormsForSelect" style="display:none">
		</div>
	`;
	
	const info = {
		information: curriculo,
		restoration: restore
	};
	const insert = ` ${info.information} `;
	const rest = ` ${info.restoration} `;
	
	var middleLeft = document.getElementById("middleLeft"),
	middleRight = document.getElementById("middleRight");
	
	if(middleLeft.style.display=="block"){
		middleLeft.style.display = "none";
		middleRight.style.display = "block";
		middleRight.innerHTML = insert;
		displayBlockFooter();
	}else{
		middleLeft.style.display = "block";
		middleRight.style.display = "none";
		middleRight.innerHTML = rest;
		displayNoneFooter();
	}
}

/**********************************************************************************************************/


// proposed exercises in HTML5
function edpHtml1(){
	var parte1 = [
	`<div id='formBox' style='display:block'><fieldset style="width:250px"><legend>Dados Pessoais</legend><form method='GET' action='#'>Nome:</br><input name='conf0' id='conf0' type='text' value='Raythan' required/></br>Endereço:</br><input name='conf1' id='conf1' type='text' value='Rua Guatemala' required/></br>Cidade:</br><input type='text' name='conf2' id='conf2' value='Campo Limpo Paulista' required/></br>Estado:</br><select id='conf3' name='conf3'><option id='options'></option></select></br>Data de Nascimento:</br><input name='conf4' id='conf4' type='date' required/></br>Email:</br><input id='conf5' name='conf5' type='email' value='aluno@faccamp.com' required/></br></fieldset><fieldset style="width:250px"><legend>Dados Profissionais</legend>Empresa:</br><input id='conf6' name='conf6' type='text' value='UNIFACCAMP' required/></br>Data de admissão:</br><input id='conf7' name='conf7' type='date' required/></br></fieldset></br>Anexar currículo:</br><input name='conf8' id='conf8' type='file'/></br></br><input type='submit' onclick='#' value='Cadastrar'/></br></form></div>
	`];
	
	const impressao = {
		parte1: parte1
	}
	const markup = `
		${impressao.parte1}
	`;
	document.getElementById("divFormsForSelect").innerHTML = markup;
	var selection = document.getElementById("conf3");
	for(i=26;i>=0;i--){
		option = document.createElement("option");
		option.text = estados[i]
		selection.add(option, selection[0]);
	}
}

function edpHtml2(){
	var parte1 = `
		<table>
			<tr>
				<th>Cores</th>
				<th id="tit1">Vermelho</th>
				<th id="tit2">Verde</th>
				<th id="tit3">Azul</th>
			</tr>
			<tr>
				<td id="linha1">Vermelho</td>
				<td id="celula1" class="linha">Vermelho</td>
				<td id="celula2" class="linha">Amarelo</td>
				<td id="celula3" class="linha">Roxo</td>
			</tr>
			<tr>
				<td id="linha2">Verde</td>
				<td id="celula4" class="linha">Amarelo</td>
				<td id="celula5" class="linha">Verde</td>
				<td id="celula6" class="linha">Ciano</td>
			</tr>
			<tr>
				<td id="linha3">Azul</td>
				<td id="celula7" class="linha">Roxo</td>
				<td id="celula8" class="linha">Ciano</td>
				<td id="celula9" class="linha">Azul</td>
			</tr>
		</table>
	`;
	
	const impressao = {
		parte1: parte1
	}
	const markup = `
		${impressao.parte1}
	`;
	document.getElementById("divFormsForSelect").innerHTML = markup;
}



/****************************************************************************************************
*							These are methods to mathematic problems								*
****************************************************************************************************/
// Form that show what type of triangle is
function formCalcMatrizTriangulo(){
	document.getElementById("formApresentacao").style.display = "none";
	var matriz = new Array(), //Matriz com os elementos
	valor, //Variável para adcionar números na matriz
	checkSuperior, //Verifica se a matriz é triangular superior
	checkInferior, //Verifica se a matriz é triangular inferior
	checkDiagonal = true, //Verifica se a matriz é diagonal
	j, //Contador coluna
	i, //Contador linha
	n = prompt("Informe o tamanho da matriz NxN:", n); //Tamanho da matriz em colunas
	m = n;
	for(i=0;i<n;i++){
		matriz[i] = [];
		for(j=0;j<m;j++){
			valor = prompt("Informe o valor em [" + i + "][" + j +"]: ", valor); 
			matriz[i][j] = valor;
		}
		
	}
	//console.log(matriz);
	for(i=0;i<n;i++){
		for(j=0;j<m;j++){
			if(i > j && matriz[i][j] == 0){
				checkInferior = true;
				//console.log("MatrizInferior[" + i + "][" + j +"]: (" + matriz[i][j] + ")" + checkInferior);
			}
			if(i > j && matriz[i][j] != 0){
				checkInferior = false;
				//console.log("MatrizInferior[" + i + "][" + j +"]: (" + matriz[i][j] + ")" + checkInferior);
				i = n;
				j = m;
			}
		}
	}
	for(i=0;i<n;i++){
		for(j=0;j<m;j++){
			if(i < j && matriz[i][j] == 0){
				checkSuperior = true;
				//console.log("MatrizSuperior[" + i + "][" + j +"]: (" + matriz[i][j] + ")" + checkSuperior);
			}
			if(i < j && matriz[i][j] != 0){
				checkSuperior = false;
				//console.log("MatrizSuperior[" + i + "][" + j +"]: (" + matriz[i][j] + ")" + checkSuperior);
				i = n;
				j = m;
			}
		}
	}
	
	for(i=0;i<n;i++){
		for(j=0;j<m;j++){
			if(i == j && matriz[i][j] == 0){
				checkDiagonal = false;
			}
		}
	}
	if(checkSuperior){
		document.write("<div id='matrizSuperior' style='display:block;'>Temos uma matriz triangular SUPERIOR!</div></br>");
	}
	if(checkInferior){
		document.write("<div id='matrizInferior' style='display:block;'>Temos uma matriz triangular INFERIOR!</div></br>");
	}
	if(checkInferior && checkSuperior){
		document.getElementById("matrizSuperior").style.display = 'none';
		document.getElementById("matrizInferior").style.display = 'none';
		document.write("<div id='matrizInferiorESuperior' style='display:block;'>A matriz é Diagonal!</div></br>");
	}
	if(!(checkInferior) && !(checkSuperior)){
		document.write("<div id='matrizInferiorESuperior' style='display:block;'>A matriz não é triangular superior nem inferior.</div></br>");
	}
	if(!checkDiagonal){
		if(document.getElementById("matrizSuperior")){
			document.getElementById("matrizSuperior").style.display = 'none';
		}
		if(document.getElementById("matrizInferior")){
			document.getElementById("matrizInferior").style.display = 'none';
		}
		if(document.getElementById("matrizInferiorESuperior")){
			document.getElementById("matrizInferiorESuperior").style.display = 'none';
		}
		document.write("<div id='matrizDiagonalComZero' style='display:block'>A matriz possui um elemento 0 na</br>diagonal portanto não pode ser triangular.</div></br>");
	}
	document.write("<table>");
	for(i=0;i<n;i++){
		document.write("<tr>");
		for(j=0;j<m;j++){
			document.write("<td style='text-align:center;border:solid;padding:10px;margin-left:5px;'>" + matriz[i][j] + "</td>");
		}
		document.write("</tr>");	
	}
	document.write("</table>");
	document.write("</br><input type='submit' value='Voltar!' onclick='~/'/>");
}

function formCalcGrauN(){
	document.write("<div id='divFormCalcGranNN'>");
	document.write("<form action='#' id='formCalcGrauNN'>");
	document.write("Esse link: <a target='_blank' href='http://www.wolframalpha.com/widgets/view.jsp?id=20e0b2135f2479705b13b7b3e9a88582'>Link!</a></br>Pode servir para comparar se o método funciona, pois é uma calculadora</br>que utiliza o método de Newton para resolver a raíz N</br>");
	document.write("<textarea id='infoUsuario'>x^2+x^3+x^4");
	document.write("</textarea></br>");
	document.write("</br>Aproximação</br>");
	document.write("<input id='infoUsuario2' style='width:50px;' type='number' placeholder='1~5'/></br>")
	document.write("<input type='submit' onclick='calcGrauN()'/>");
	document.write("</form></div>");
}

function calcGrauN(){
	var equacao = document.getElementById("infoUsuario").value,
	aproximacaoUsuario = document.getElementById("infoUsuario2").value;
	equacaoFinal = 1,
	intervalo = 1,
	intervalo2 = 0,
	derivada = 0,
	i = 0;
	vetorCalc = new Array();
	equacaoRep = equacao.replace(/\+/g,".+.");
	equacaoRep = equacaoRep.replace(/\-/g,".-.");
	equacaoRep = equacaoRep.replace(/\^/g,".^.");
	vetorCalc = equacaoRep.split(".");
	console.log(vetorCalc);
	document.write("<table>");
	for(i=0;vetorCalc[i]!=null;i++){
		if(vetorCalc[i]=="x"){
			vetorCalc.splice(i, 0, vetorCalc[i+2]);
			vetorCalc.splice((i+3), 1, (vetorCalc[i] - 1));
			i++;
		}
	}
	console.log("Vetor: " + vetorCalc);
	for(c=0,aproximacao=Math.pow(10, (aproximacaoUsuario * (-1)));equacaoFinal>=aproximacao;c++){
		for(i=0;vetorCalc[i]!=null;i++){
			if(vetorCalc[i]=="x"){
				if(vetorCalc[i+3]=="+" && vetorCalc[i-2]!=null){
					intervalo2 = intervalo2 + Math.pow(intervalo, (vetorCalc[i+2]));
					derivada = derivada + vetorCalc[i-1] * Math.pow(intervalo, ((vetorCalc[i+2]) - 1));
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i+3]=="-" && vetorCalc[i-2]!=null){
					intervalo2 = intervalo2 - (Math.pow(intervalo, (vetorCalc[i+2]))) * (-1);
					derivada = derivada - ((vetorCalc[i-1]) * (Math.pow(intervalo, ((vetorCalc[i+2]) - 1)))) * (-1);
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i-2]=="+" && vetorCalc[i+3]==null){
					intervalo2 = intervalo2 + Math.pow(intervalo, (vetorCalc[i+2]));
					derivada = derivada + vetorCalc[i-1] * Math.pow(intervalo, ((vetorCalc[i+2]) - 1));
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i-2]=="-" && vetorCalc[i+3]==null){
					intervalo2 = intervalo2 - (Math.pow(intervalo, (vetorCalc[i+2]))) * (-1);
					derivada = derivada - ((vetorCalc[i-1]) * (Math.pow(intervalo, ((vetorCalc[i+2]) - 1)))) * (-1);
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i-2]=="+" && vetorCalc[i+3]!=null){
					intervalo2 = intervalo2 + Math.pow(intervalo, (vetorCalc[i+2]));
					derivada = derivada + vetorCalc[i-1] * Math.pow(intervalo, ((vetorCalc[i+2]) - 1));
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i-2]=="-" && vetorCalc[i+3]!=null){
					intervalo2 = intervalo2 - (Math.pow(intervalo, (vetorCalc[i+2]))) * (-1);
					derivada = derivada - ((vetorCalc[i-1]) * (Math.pow(intervalo, ((vetorCalc[i+2]) - 1)))) * (-1);
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i+3]=="+" && vetorCalc[i-2]==null){
					intervalo2 = intervalo2 + Math.pow(intervalo, (vetorCalc[i+2]));
					derivada = derivada + vetorCalc[i-1] * Math.pow(intervalo, ((vetorCalc[i+2]) - 1));
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
				if(vetorCalc[i+3]=="-" && vetorCalc[i-2]==null){
					intervalo2 = intervalo2 - (Math.pow(intervalo, (vetorCalc[i+2]))) * (-1);
					derivada = derivada - ((vetorCalc[i-1]) * (Math.pow(intervalo, ((vetorCalc[i+2]) - 1)))) * (-1);
					/*document.write("Derivada: " + derivada + "</br>");
					document.write("intervalo: " + intervalo + "</br>");
					document.write("intervalo2: " + intervalo2 + "</br>");
					document.write("Condição6</br></br>");*/
				}
			}
		}
		equacaoFinal = intervalo - (intervalo2 / derivada);
		intervalo = equacaoFinal;
		intervalo2 = 0;
		derivada = 0;
		document.write("</br><tl style='border:solid;padding:.5%;margin:0.5%;'>Equação Final: </tl> <tl style='border:solid;padding:.5%;margin:0.5%;'>Iteração: " + c + " </tl> <tl style='border:solid;padding:.5%;margin:0.5%;'>" + equacaoFinal + "</tl></br>");
	}
	document.write("</table>");
	
}

function formCalcParalelo(){
	document.write("<div id='envio4' style='font-size:18;display:block;text-align:center;margin-top:8%'>");
	document.write("Quantidade de resistores em paralelo? ");
	document.write("<form action='#'>");
	document.write("<input id='qtdDeResistores' style='width:150' autofocus type='number'/>");
	document.write("<input onclick='calculoParalelo()' type='submit' value='Enviar'/>");
	document.write("</form></div>");
}

function calculoParalelo(valores,qtd, i){
	var valores = new Array(), // Vetor para armazenar os valores dos resistores
	qtd = document.getElementById("qtdDeResistores").value, // Quantidade de resistores para entrar na contagem
	resultado = 0,
	resistor = 0,
	i = 1; // Valor do contador de parada
	for(i=1;i<=qtd;i++){
		valores[i] = prompt("Digite o valor do resistor[" + i + "]", resistor);
	} 
	for(i=qtd;i>0;i--){
		resultado = resultado + parseFloat(valores[i]);
	}
	resultado = resultado / qtd;
	if(document.getElementById("envio4") != null){
		var ocultar = document.getElementById("envio4");
		console.log(ocultar);
		if (ocultar.style.display == 'block'){
			document.getElementById("envio4").style.display = 'none';
		}
	}
	document.write("</br><div style='font-size:34;text-align:center;margin-top:5%;color:red'>Resultado: " + resultado.toFixed(2) + " ohms.</div></br>");
	document.write("<div style='display:block;font-size:25;color:red;text-align:center;margin-top:5%'><form action='index.html'><input type='submit' autofocus onclick='~/' value='Novamente?'/></form></div>");
}

function formRaizNewton(){
	document.write("<div id='envio3' style='display:block;margin-top:10%;font-size:30;text-align:center'>");
	document.write("Este relatório tem o objetivo de informar a raíz quadrada</br> aproximada de um número pelo método de newton!</br></br></br>");
	document.write("<form action='#'><input id='numeroRaiz' style='width:300' type='number' placeholder='Digite o numero para calcular' required autofocus/></br>");
	document.write("<input id='aproximacao' type='number' style='width:300' placeholder='Digite a aproximação de casas decimais' required/></br>");
	document.write("<input type='submit' onclick='calcularRaiz()' value='Calcular raíz aproximada!!'/>");
	document.write("</form></div>");

	if(document.getElementById("formApresentacao") != null){
		var ocultar = document.getElementById("formApresentacao");
		console.log(ocultar);
		if (ocultar.style.display == 'block'){
			document.getElementById("formApresentacao").style.display = 'none';
		}
	}
}

function calcularRaiz(){
	var	intervalo = 1, // intervalo para calcular
	equacao = new Array(); // Vetor para determinar a condição de parada na equacao de Newton Raphson
	var valorDoUsuario = document.getElementById("numeroRaiz").value; // Valor enviado pelo usuario para calcular a raiz
	var aproximacao = document.getElementById("aproximacao").value; // Valor informado pelo usuario resultante das casas decimais
	equacao[0] = 1.00000000000002; // três primeiros valores para fazer o for funcionar
	equacao[1] = 1.00000000000003; // sem isso as variáveis ficam como nulas no índice, e ele não consegue checar as casas decimais
	equacao[2] = 1.00000000000003;
	for(i=2;equacao[i-1].toFixed(15)!=equacao[i-2].toFixed(15);i++){ // i iniciando no indice 2; logica enquanto o valor do indice maior for diferente do anterior em 15 casas decimais ele entra no laço; i recebe +1 para adcionar um valor ao proximo indice
		equacao[i] = intervalo - ((Math.pow(intervalo, 2) - valorDoUsuario) / (2 * intervalo)); // Equação de que calcula o proximo intervalo
		intervalo = equacao[i]; // intervalo recebendo o valor da equação para ser utilizado no próximo laço
		document.write("Valor do índice atual[i]: " + equacao[i] + "</br>"); // impressão que mostra o valor do índice no vetor atual
		document.write("Valor do índice anterior [i-1]: " + equacao[i-1] + "</br>"); //impressão que mostra o valor do índice no vetor anterior
		document.write("Iteração [" + (i - 1) + "]</br></br>"); // impressão que mostra o número da iteração
	}
	document.write("<div id='resultadoRaiz' style='display:block;font-size:25;color:red;text-align:center;margin-top:15%'>"); // style para formatação do formulário
	document.write("A raíz aproximada de: " + valorDoUsuario + "</br>"); //Impressão para mostrar o valor que o usuário digitou
	document.write("É aproximadamente: " + parseFloat(equacao[i-1].toFixed(aproximacao)) + "</br></br>"); // Impressão que informa ao usuário a raíz aproximada
	document.write("<form action='index.html'><input type='submit' onclick='~/' value='Novamente?'</form></div>"); // formulário que recarrega a página
	
	if(document.getElementById("envio3") != null){ // condicional que apaga o formulário anterior
		var ocultar = document.getElementById("envio3");
		if (ocultar.style.display == 'block'){
			document.getElementById("envio3").style.display = 'none';
		}
	}
}

function formBin() {
	document.write("<div id='envio2' style='display:block;margin-top:2%;font-size:18;text-align:center'>Formulário afim de calcular o número binário de qualquer inteiro:</br></br></br>");
	document.write("<form id='envio' action='#'>");
	document.write("<input type='text' id='numero' required autofocus/></br>");
	document.write("<input type='submit' onclick='conversorDecimal()' value='Calcular Binario'/>");
	document.write("</form>");
	
	document.write("Formulário afim de calcular o número inteiro de qualquer binario:</br></br></br>");
	document.write("<form id='envio' action='#'>");
	document.write("<input type='text' id='numero2' required/></br>");
	document.write("<input type='submit' onclick='conversorBinario()' value='Calcular Inteiro'/>");
	document.write("</form></br>");
	
	document.write("Produto licenciado, produzido e distribuido por:</br>");
	document.write("Raythan Padovani Abreu Machado. RA: 27822</div>");
	
	if(document.getElementById("formApresentacao") != null){
		var ocultar = document.getElementById("formApresentacao");
		console.log(ocultar);
		if (ocultar.style.display == 'block'){
			document.getElementById("formApresentacao").style.display = 'none';
		}
	}
}

function conversorDecimal(){
	var marcador = document.getElementById("numero").value;
	var multiplicador = new Array();
	var potenciaPos = 0, i = 0, binario2 = 0;
	var checkPotencia = Math.pow(2, potenciaPos);
	var binario;
	/*  Declaração de variáveis  */
	if (marcador < 0){
		marcador = marcador * (-1);
		for (checkPotencia = 1; checkPotencia <= marcador; checkPotencia = checkPotencia + checkPotencia) {
			multiplicador[i] = Math.pow(2, potenciaPos);
			i++;
			potenciaPos++;
		}
		i--;
		document.write("<div id='resultadoBinario' style='display:block;font-size:34;text-align:center;margin-top:5%'>Binário de: " + marcador + " é: -");
		while (multiplicador[i] <= marcador){
			if(multiplicador[i] + binario2 <= marcador){
			binario = 1;
			binario2 = binario2 + multiplicador[i];
			document.write(binario);
			i--;
			}
			else if(multiplicador[i] + binario2 >= marcador){
			binario = 0;
			document.write(binario);
			i--;
			}
		}
		document.write("</div></br</br></br><div id='resultadoBinario' style='display:block;font-size:25;color:red;text-align:center;margin-top:5%'><form action='index.html'><input type='submit' onclick='~/' value='Novamente?'</form></div>");
	}
	else if (marcador >= 0){	
	for (checkPotencia = 1; checkPotencia <= marcador; checkPotencia = checkPotencia + checkPotencia) {
		multiplicador[i] = Math.pow(2, potenciaPos);
		i++;
		potenciaPos++;
	}
	i--; // Redução de uma potência para sair da contagem do nulo
	document.write("<div id='resultadoBinario' style='display:block;font-size:34;text-align:center;margin-top:5%'>A representação binária do inteiro: " + marcador + "</br></br>É: ");
	while (multiplicador[i] <= marcador){
		if(multiplicador[i] + binario2 <= marcador){
		binario = 1;
		binario2 = binario2 + multiplicador[i];
		document.write(binario);
		i--;
		}
		else if(multiplicador[i] + binario2 >= marcador){
		binario = 0;
		document.write(binario);
		i--;
		}
	}
	document.write("</div></br</br></br><div id='resultadoBinario' style='display:block;font-size:25;color:red;text-align:center;margin-top:5%'><form action='index.html'><input type='submit' onclick='~/' value='Novamente?'</form></div>");
	}
	var ocultar2 = document.getElementById("envio2");
	console.log(ocultar2);
	if (ocultar2.style.display == 'block'){
		document.getElementById("envio2").style.display = 'none';
	}
}

function conversorBinario(){
	var numero = document.getElementById("numero2").value;
	var nome1 = numero.split(/(?=[0-1])/);
	//console.log(nome1);
	var contador1 = nome1.length;
	var potencia = 0;
	var checkPotencia2 = Math.pow(2, potencia);
	var resultado = 0;
	console.log(contador1);
	contador1--;
		if (numero < 0) {
			while (contador1 >= 0){
				if (nome1[contador1] === "1") {
					resultado = resultado + checkPotencia2;
				}
				checkPotencia2 = checkPotencia2 + checkPotencia2;
				potencia++;
				contador1--;
			}
			document.write("<div style='font-size:34;text-align:center;margin-top:5%'>A representação inteira do binário: " + numero + "</br></br>É: -" + resultado);
			document.write("</div></br</br></br><div style='font-size:25;color:red;text-align:center;margin-top:5%'><form action='index.html'><input type='submit' onclick='~/' value='Novamente?'</form></div>");
		}
	if (numero >= 0){
		while (contador1 >= 0){
			if (nome1[contador1] === "1") {
				resultado = resultado + checkPotencia2;
			}
			checkPotencia2 = checkPotencia2 + checkPotencia2;
			potencia++;
			contador1--;
		}
		document.write("<div style='font-size:34;text-align:center;margin-top:5%'>A representação inteira do binário: " + numero + "</br></br>É: " + resultado);
		document.write("</div></br</br></br><div style='font-size:25;color:red;text-align:center;margin-top:5%'><form action='index.html'><input type='submit' onclick='~/' value='Novamente?'</form></div>");
		var ocultar2 = document.getElementById("envio2");
		console.log(ocultar2);
		if (ocultar2.style.display == 'block'){
			document.getElementById("envio2").style.display = 'none';
		}
	}
	
}