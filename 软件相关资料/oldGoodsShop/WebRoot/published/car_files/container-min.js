/*
Copyright 2013, KISSY v1.42
MIT Licensed
build time: Dec 4 22:04
*/
KISSY.add("component/container/render",["component/control","component/manager"],function(g,d){var f=d("component/control"),i=d("component/manager");return f.getDefaultRender().extend([],{decorateDom:function(){var d=this,f=d.getChildrenContainerEl(),a=d.control,b=a.get("defaultChildCfg"),c=b.prefixCls,e=b.xclass,h=[];f.children().each(function(a){var f=d.getComponentConstructorByNode(c,a)||e&&i.getConstructorByXClass(e);f&&h.push(new f(g.merge(b,{srcNode:a})))});a.set("children",h)},getChildrenContainerEl:function(){return this.$el}},
{name:"ContainerRender"})});
KISSY.add("component/container",["component/control","./container/render"],function(g,d){function f(a){if(a.target===this){var b=a.component,c=this.get("children"),a=a.index;c.splice(a,0,b);c=this.get("children");b=c[a];b.setInternal("parent",this);this.get("rendered")&&this.renderChild(a);this.fire("afterAddChild",{component:b,index:a})}}function i(a){if(a.target===this){var b=a.component,c,e,h=a.destroy,d=this.get("children"),a=a.index;-1!==a&&d.splice(a,1);b.setInternal("parent",null);if(h)b.destroy&&
b.destroy();else if(b.get&&(e=b.el))(c=e.parentNode)&&c.removeChild(e);this.fire("afterRemoveChild",{component:b,index:a})}}var j=d("component/control"),k=d("./container/render");return j.extend({isContainer:!0,initializer:function(){var a=this.get("prefixCls"),b=this.get("defaultChildCfg");this.publish("beforeAddChild",{defaultFn:f});this.publish("beforeRemoveChild",{defaultFn:i});b.prefixCls=b.prefixCls||a},createDom:function(){this.createChildren()},renderUI:function(){this.renderChildren()},renderChildren:function(){var a,
b=this.get("children");for(a=0;a<b.length;a++)this.renderChild(a)},createChildren:function(){var a,b=this.get("children");for(a=0;a<b.length;a++)this.createChild(a)},addChild:function(a,b){var c=this.get("children");void 0===b&&(b=c.length);this.fire("beforeAddChild",{component:a,index:b})},renderChild:function(a){var b=this.get("children");this.createChild(a).render();this.fire("afterRenderChild",{component:b[a],index:a})},createChild:function(a){var b,c,e,d;b=this.get("children")[a];d=this.view.getChildrenContainerEl();
e=d[0];c=e.children[a]||null;b.get("rendered")?(d=b.el,d.parentNode!==e&&e.insertBefore(d,c)):(c?b.set("elBefore",c):b.set("render",d),b.create());this.fire("afterCreateChild",{component:b,index:a});return b},removeChild:function(a,b){void 0===b&&(b=!0);this.fire("beforeRemoveChild",{component:a,index:g.indexOf(a,this.get("children")),destroy:b})},removeChildren:function(a){var b,c=[].concat(this.get("children"));for(b=0;b<c.length;b++)this.removeChild(c[b],a);return this},getChildAt:function(a){return this.get("children")[a]||
null},destructor:function(){var a,b=this.get("children");for(a=0;a<b.length;a++)b[a].destroy&&b[a].destroy()}},{ATTRS:{children:{value:[],getter:function(a){var b=null,c,d;for(c=0;c<a.length;c++)d=a[c],d.isControl||(b=b||this.get("defaultChildCfg"),g.mix(d,b,!1),a[c]=this.createComponent(d));return a},setter:function(a){var b,c;for(b=0;b<a.length;b++)c=a[b],c.isControl&&c.setInternal("parent",this)}},defaultChildCfg:{value:{}},xrender:{value:k}},name:"container"})});
