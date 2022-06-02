
function FGravaS(elementID = '', Valor = '') {
    let obj = document.getElementById(elementID);
    if (obj == null) {
        alert('FGravaS/ Erro!!  id <' + elementID + '> nÃ£o localizado! ');
    } else {
        //if ('outerHTML' in obj) {
        //    message += "outer HTML : " + elem.outerHTML;
        //}
        try {
            obj.value = Valor;
        } catch (e) {
            // find verificar se id existe TODO
            alert('FGravaS/ Erro value no id :' + elementID + ' ' + e);
        }
        try {
            obj.innerHTML = Valor;
            //obj.innerText =  Valor ;
            // document.getElementById("pricep").innerHTML = "$"+y;
        } catch (e) {
            alert('FGravaS/ Erro innerHTML no id :' + elementID + ' ' + e);
        }
    }
}

function FIs_Empty(x){

    if (typeof x == 'undefined') return true;
    if (typeof x == 'null') return true;
    if (typeof x == 'false') return true;
    if (x.length == 0) return true;
    if (x == "") return true;

    return false;
}

function FLoadTemplate(cTag, Arquivo_HTML , Tag_Param1_Value) {

    $(cTag).load(Arquivo_HTML, function (response, status ) {
        if (status == "error") {
            var msg = "Sorry but there was an error: ";
           // $(cTag).html(msg + xhr.status + " " + xhr.statusText);
           // ME('FLoadTemplate/426 - Erro ao carregar ' + Arquivo_HTML + '  / ' + xhr.status);
        } else if (status == 'success') {
            if (!FIs_Empty(Tag_Param1_Value)){
               FGravaS( 'Tag_Param1',Tag_Param1_Value) ;
               // alert('FLoadTemplate done ' + Arquivo_HTML);
            }
        } else {
            alert('spf_funcoes/40 - ' + status);
        }
    });

}