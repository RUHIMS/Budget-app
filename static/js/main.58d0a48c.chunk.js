(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,n){e.exports=n(196)},194:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),i=n(199),u=n(200),s=n(197),l=n(12),d=n(122),p=n(108),m=n.n(p),E=Object(l.b)()(function(e){var t=e.dispatch,n=e.id,a=e.description,o=e.amount,c=e.createdAt;return r.a.createElement("div",null,r.a.createElement(d.a,{to:"/edit/".concat(n)},r.a.createElement("h3",null,a)),r.a.createElement("p",null,o," - ",c),r.a.createElement("button",{onClick:function(){t(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}({id:n}))}},"Remove"))}),h=n(2),f=n.n(h),v=function(e,t){var n=t.text,a=t.sortBy,r=t.startDate,o=t.endDate;return e.filter(function(e){var t=f()(e.createdAt),a=!r||r.isSameOrBefore(t,"day"),c=!o||o.isSameOrAfter(t,"day"),i=e.description.toLowerCase().includes(n.toLowerCase());return a&&c&&i}).sort(function(e,t){return"date"===a?e.createdAt<t.createdAt?1:-1:"amount"===a?e.amount<t.amount?1:-1:void 0})},g=Object(l.b)(function(e){return{expense:v(e.expenses,e.filters)}})(function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Expense List"),e.expense.map(function(e){return r.a.createElement(E,Object.assign({key:e.id},e))}))}),D=n(39),O=n(40),b=n(45),S=n(41),_=n(46),x=function(){return{type:"SET_START_DATE",startDate:arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0}},T=function(){return{type:"SET_END_DATE",endDate:arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0}},C=n(42),A=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(b.a)(this,Object(S.a)(t).call(this,e))).onDatesChange=function(e){var t=e.startDate,a=e.endDate;n.props.dispatch(x(t)),n.props.dispatch(T(a))},n.onFocusChange=function(e){n.setState(function(){return{calendarFocused:e}})},n.state={calendarFocused:null},n}return Object(_.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.props.filter.text,onChange:function(t){e.props.dispatch(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t.target.value))}}),r.a.createElement("select",{value:this.props.filter.sortBy,onChange:function(t){"date"===t.target.value&&e.props.dispatch({type:"SORT_BY_DATE"}),"amount"===t.target.value&&e.props.dispatch({type:"SORT_BY_AMOUNT"})}},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"amount"},"Amount")),r.a.createElement(C.DateRangePicker,{startDate:this.props.filter.startDate,endDate:this.props.filter.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1}}))}}]),t}(r.a.Component),y=Object(l.b)(function(e){return{filter:e.filters}})(A),j=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(g,null))},N=(n(178),n(180),f()());console.log(N.format("MMM Do, YYYY"));var w=function(e){function t(e){var n;return Object(D.a)(this,t),(n=Object(b.a)(this,Object(S.a)(t).call(this,e))).onDescriptionChange=function(e){var t=e.target.value;n.setState(function(){return{description:t}})},n.onNoteChange=function(e){var t=e.target.value;n.setState(function(){return{note:t}})},n.onFocusChange=function(e){var t=e.focused;n.setState(function(){return{calenderFocused:t}})},n.onDateChange=function(e){e&&n.setState(function(){return{createdAt:e}})},n.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||n.setState(function(){return{amount:t}})},n.onSubmit=function(e){e.preventDefault(),n.state.amount&&n.state.description?(n.setState(function(){return{errorMsg:""}}),n.props.onSubmit({description:n.state.description,amount:parseFloat(n.state.amount,10),createdAt:n.state.createdAt.valueOf(),note:n.state.note})):n.setState(function(){return{errorMsg:"Please fill in description and amount"}})},n.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?e.expense.amount.toString():"",createdAt:e.expense?f()(e.expense.createdAt):f()(),calenderFocused:!1,errorMsg:""},n}return Object(_.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.errorMsg&&r.a.createElement("p",null,this.state.errorMsg),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"description",autoFocus:!0,value:this.state.description,onChange:this.onDescriptionChange}),r.a.createElement("input",{type:"text",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),r.a.createElement("br",null),r.a.createElement(C.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calenderFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}}),r.a.createElement("textarea",{placeholder:"Note for the Expense (optional)",value:this.state.note,onChange:this.onNoteChange}),r.a.createElement("button",null,"Add Expense")))}}]),t}(r.a.Component),F=Object(l.b)()(function(e){return r.a.createElement("div",null,r.a.createElement(w,{onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,a=e.note,r=void 0===a?"":a,o=e.amount,c=void 0===o?0:o,i=e.createdAt,u=void 0===i?0:i;return{type:"ADD_EXPENSE",expense:{id:m()(),description:n,note:r,amount:c,createdAt:u}}}(t)),e.history.push("/")}}))}),R=Object(l.b)(function(e,t){return{expense:e.expenses.find(function(e){return e.id===t.match.params.id})}})(function(e){return r.a.createElement("div",null,r.a.createElement(w,{expense:e.expense,onSubmit:function(t){e.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:"EDIT_EXPENSE",id:e.id,updates:e.updates}}(e.expense.id,t)),e.history.push("/")}}))}),M=function(){return r.a.createElement("p",null,"This is Help Page")},B=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"404! Page Not Found"),r.a.createElement(d.a,{to:"/"},"Go To Home"))},X=n(198),P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Your Budget"),r.a.createElement(X.a,{to:"/",activeClassName:"is-active",exact:!0},"Home"),r.a.createElement("br",null),r.a.createElement(X.a,{to:"/create",activeClassName:"is-active"},"Create Exp"),r.a.createElement(X.a,{to:"/edit",activeClassName:"is-active"},"Edit Exp"),r.a.createElement(X.a,{to:"/help",activeClassName:"is-active"},"Help"))},k=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(P,null),r.a.createElement(u.a,null,r.a.createElement(s.a,{path:"/",component:j,exact:!0}),r.a.createElement(s.a,{path:"/create",component:F}),r.a.createElement(s.a,{path:"/edit/:id",component:R}),r.a.createElement(s.a,{path:"/help",component:M}),r.a.createElement(s.a,{component:B}))))},Y=n(32),I=n(16),L=n(110),H=[],U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(L.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter(function(e){return e.id!==t.id});case"EDIT_EXPENSE":return e.map(function(e){return e.id===t.id?Object(I.a)({},e,t.updates):e});default:return e}},V={text:"",sortBy:"date",startDate:f()().startOf("month"),endDate:f()().endOf("month")},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(I.a)({},e,{text:t.text});case"SORT_BY_AMOUNT":return Object(I.a)({},e,{sortBy:"amount"});case"SORT_BY_DATE":return Object(I.a)({},e,{sortBy:"date"});case"SET_START_DATE":return Object(I.a)({},e,{startDate:t.startDate});case"SET_END_DATE":return Object(I.a)({},e,{endDate:t.endDate});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(194);var W=Object(Y.c)(Object(Y.b)({expenses:U,filters:J}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),$=r.a.createElement(l.a,{store:W},r.a.createElement(k,null));c.a.render($,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.58d0a48c.chunk.js.map