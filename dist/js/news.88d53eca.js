webpackJsonp([3],{43:function(e,t,n){var i=n(22);i.registerController("newsCtrl",["$scope","News","$modal","dialogs","$timeout",function(e,t,n,i,s){console.log(t),e.currentPage=6,e.numPages=20,e.maxSize=5,e.itemsPerPage=6,e.query=function(){return t.query({pageSize:1},function(t){return e.news=t,t})},e.query(),e.remove=function(n,s){i.confirm({template:'<p class="text-center text-default">确认删除？</p>'}).then(function(){t.remove({id:s._id.$oid},function(t){e.query()})})},e.selectPage=function(e){console.log(e)},e.select=function(e){e.tab},s(function(){e.tabs=[{title:"Home",content:"ring be appetite it declared. High eyes kept so busy feel call in. Would day nor ask walls known. But preserved advantage are but and certainty earnestly enjoyment. Passage weather as up am exposed. And natural related man subject. Eagerness get situation his was delighted. "},{title:"Profile",selected:!0,content:"Fulfilled direction use continual set him propriety continued. Saw met applauded favourite deficient engrossed concealed and her. Concluded boy perpetual old supposing. Farther related bed and passage comfort civilly. Dashwoods see frankness objection abilities the. As hastened oh produced prospect formerly up am. Placing forming nay looking old married few has. Margaret disposed add screened rendered six say his striking confined. "},{title:"Message",content:"When be draw drew ye. Defective in do recommend suffering. House it seven in spoil tiled court. Sister others marked fat missed did out use. Alteration possession dispatched collecting instrument travelling he or on. Snug give made at spot or late that mr. "},{title:"Setting",content:"Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all. "}]},10)}]),i.registerController("newsDetailCtrl",["$scope","news","News",function(e,t,n){e.news=t}]),i.registerController("newsSaveCtrl",["$scope","news","News","$state",function(e,t,n,i){e.news=t,e.save=function(s){e.newsForm.submited=!0,e.newsForm.$invalid||(e.news._id?n.update({id:t._id.$oid},angular.extend({},e.news,{_id:void 0}),function(e){i.go("news.list")}):n.save({},angular.extend({},e.news),function(e){i.go("news.list")}))}}])}});