(function(n,a,r,c){"use strict";const{View:u}=a.ReactNative;let e=[];var i={onLoad:function(){e.push(c.after("render",u,function(t,o){return r.findInReactTree(o,function(d){return d.type?.name==="ChannelPinsConnected"}),console.log(channelTab),o}))},onUnload:function(){e.forEach(function(t){return t()})}};return n.default=i,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro.common,vendetta.utils,vendetta.patcher);