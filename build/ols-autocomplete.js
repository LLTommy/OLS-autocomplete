require=function t(e,o,i){function n(r,s){if(!o[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=o[r]={exports:{}};e[r][0].call(d.exports,function(t){var o=e[r][1][t];return n(o?o:t)},d,d.exports,t,e,o,i)}return o[r].exports}for(var a="function"==typeof require&&require,r=0;r<i.length;r++)n(i[r]);return n}({"ols-autocomplete":[function(t,e,o){e.exports=autocomplete=function(){function t(t){var e="terms";return"property"==t?e="properties":"individual"==t?e="individuals":"ontology"==t&&(e="ontology"),e}function e(t,e,o,i){if(console.log("Action!"),console.log(t),console.log(e),console.log(o),console.log(i),void 0!=o&&void 0!=i){var n=encodeURIComponent(i);window.location.href=t+"ontologies/"+e+"/"+o+"?iri="+n}else window.location.href=t+"ontologies/"+suggestion_ontoloy}function o(e,o,i){e.bind("typeahead:select",function(e,i){if(void 0!=i.data){var n=t(i.data.type);"ontology"==n?options.action.call(this,o,i.data.ontology):options.action.call(this,o,i.data.ontology,n,i.data.iri)}else e.target.form.submit()}).typeahead({hint:!1,highlight:!0,minLength:2,limit:4,async:!0},i).focus()}function i(){return{header:'<hr/><h5 style="text-align: center">Jump to</h5>',suggestion:function(e){var o=e.data.label,i="";""!=e.data.synonym&&(o=e.data.synonym,i="<div class='sub-text'>synonym for "+e.value+"</div>");var n="<div class='ontology-source'>"+e.data.prefix+"</div>",a=t(e.data.type);return"ontology"!=a&&(n+="&nbsp;<div class='term-source'>"+e.data.shortForm+"</div>"),"<div style='width: 100%; display: table;'> <div style='display: table-row'><div  style='display: table-cell;' class='ontology-suggest'><div class='suggestion-value'>"+o+"</div>"+i+"</div><div style='vertical-align:middle; text-align: right; width:60px; display: table-cell;'>"+n+"</div></div></div>"},footer:Handlebars.compile('<hr/><div onclick="jQuery(this).closest(\'form\').submit()" style="text-align: right;" class="tt-suggestion tt-selectable">Search OLS for <b>{{query}}</b></div>')}}function n(t,e,o){var i="";return e&&(i="&ontology="+e),o&&(i+="&type="+o),new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,identify:function(t){return t.id},remote:{url:t+"api/select?q=%QUERY"+i,wildcard:"%QUERY",transform:function(t){return r(t)}}})}function a(t){return new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,remote:{url:t+"api/suggest?q=%QUERY",wildcard:"%QUERY",transform:function(t){return jQuery.map(t.response.docs,function(t){return{value:t.autosuggest}})}}})}function r(t){var e=t.responseHeader.params.q;return jQuery.map(t.response.docs,function(o){var i=o.id,n=o.label,a="",r=!0;void 0!=t.highlighting[i].label_autosuggest?(n=t.highlighting[i].label_autosuggest[0],r=!1):void 0!=t.highlighting[i].label&&(n=t.highlighting[i].label[0],r=!1),r&&(void 0!=t.highlighting[i].synonym_autosuggest?a=t.highlighting[i].synonym_autosuggest[0]:void 0!=t.highlighting[i].synonym&&(a=t.highlighting[i].synonym[0]));var s=o.obo_id;return void 0==s&&(s=o.short_form),{id:i,value:o.label,data:{ontology:o.ontology_name,prefix:o.ontology_prefix,iri:o.iri,label:n,synonym:a,shortForm:s,type:o.type},query:e}})}options={action:e},autocomplete.prototype.start=function(t){options=jQuery.extend(!0,{},options,t),jQuery("input[data-olswidget='multisearch']").each(function(){var t=jQuery(this).data("selectpath")?jQuery(this).data("selectpath"):"",e=jQuery(this).data("olsontology")?jQuery(this).data("olsontology"):"",r=jQuery(this).data("olstype")?jQuery(this).data("olstype"):"",s=[{name:"suggestion",source:a(t),display:"value"},{name:"selection",source:n(t,e,r),display:"value",templates:i()}];o(jQuery(this),t,s)}),jQuery("input[data-olswidget='select']").each(function(){var t=jQuery(this).data("selectpath")?jQuery(this).data("selectpath"):"",e=jQuery(this).data("olsontology")?jQuery(this).data("olsontology"):"",a=jQuery(this).data("olstype")?jQuery(this).data("olstype"):"",r=[{name:"selection",source:n(t,e,a),display:"value",templates:i()}];o(jQuery(this),t,r)})}}},{}]},{},[]);