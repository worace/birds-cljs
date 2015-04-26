// Compiled by ClojureScript 0.0-2740 {}
goog.provide('birds_cljs.core');
goog.require('cljs.core');
goog.require('quil.middleware');
goog.require('birds_cljs.flock');
goog.require('birds_cljs.bird');
goog.require('quil.core');
cljs.core.enable_console_print_BANG_.call(null);
birds_cljs.core.bounds = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(600)], null);
birds_cljs.core.grass = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(153),(255),(153)], null);
birds_cljs.core.blue = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(255)], null);
birds_cljs.core.setup = (function setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flock","flock",265984040),birds_cljs.flock.create_flock.call(null,(30))], null);
});
birds_cljs.core.wrap_coord = (function wrap_coord(coord,bound){
if((coord < (0))){
return (bound + coord);
} else {
return cljs.core.mod.call(null,coord,bound);
}
});
birds_cljs.core.wrap_birds = (function wrap_birds(flock,bounds){
return cljs.core.map.call(null,(function (b){
var pos = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(b);
var newx = birds_cljs.core.wrap_coord.call(null,cljs.core.first.call(null,pos),cljs.core.first.call(null,bounds));
var newy = birds_cljs.core.wrap_coord.call(null,cljs.core.last.call(null,pos),cljs.core.last.call(null,bounds));
return cljs.core.assoc.call(null,b,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [newx,newy], null));
}),flock);
});
birds_cljs.core.update_state = (function update_state(state){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"flock","flock",265984040),birds_cljs.core.wrap_birds.call(null,birds_cljs.flock.update_flock.call(null,new cljs.core.Keyword(null,"flock","flock",265984040).cljs$core$IFn$_invoke$arity$1(state)),birds_cljs.core.bounds));
});
birds_cljs.core.draw_bird = (function draw_bird(bird){
cljs.core.apply.call(null,quil.core.fill,birds_cljs.core.blue);

var vec__7674 = birds_cljs.bird.movement_vector.call(null,bird);
var x1 = cljs.core.nth.call(null,vec__7674,(0),null);
var y1 = cljs.core.nth.call(null,vec__7674,(1),null);
var x2 = cljs.core.nth.call(null,vec__7674,(2),null);
var y2 = cljs.core.nth.call(null,vec__7674,(3),null);
quil.core.push_matrix.call(null);

quil.core.translate.call(null,x1,y1);

quil.core.rotate.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird));

quil.core.no_stroke.call(null);

quil.core.ellipse.call(null,(0),(0),(25),(8));

quil.core.triangle.call(null,(0),(0),(-15),(7),(-15),(-7));

quil.core.triangle.call(null,(8),(0),(0),(20),(0),(-20));

return quil.core.pop_matrix.call(null);
});
birds_cljs.core.draw_flock = (function draw_flock(flock){
var seq__7679 = cljs.core.seq.call(null,flock);
var chunk__7680 = null;
var count__7681 = (0);
var i__7682 = (0);
while(true){
if((i__7682 < count__7681)){
var bird = cljs.core._nth.call(null,chunk__7680,i__7682);
birds_cljs.core.draw_bird.call(null,bird);

var G__7683 = seq__7679;
var G__7684 = chunk__7680;
var G__7685 = count__7681;
var G__7686 = (i__7682 + (1));
seq__7679 = G__7683;
chunk__7680 = G__7684;
count__7681 = G__7685;
i__7682 = G__7686;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__7679);
if(temp__4126__auto__){
var seq__7679__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7679__$1)){
var c__4546__auto__ = cljs.core.chunk_first.call(null,seq__7679__$1);
var G__7687 = cljs.core.chunk_rest.call(null,seq__7679__$1);
var G__7688 = c__4546__auto__;
var G__7689 = cljs.core.count.call(null,c__4546__auto__);
var G__7690 = (0);
seq__7679 = G__7687;
chunk__7680 = G__7688;
count__7681 = G__7689;
i__7682 = G__7690;
continue;
} else {
var bird = cljs.core.first.call(null,seq__7679__$1);
birds_cljs.core.draw_bird.call(null,bird);

var G__7691 = cljs.core.next.call(null,seq__7679__$1);
var G__7692 = null;
var G__7693 = (0);
var G__7694 = (0);
seq__7679 = G__7691;
chunk__7680 = G__7692;
count__7681 = G__7693;
i__7682 = G__7694;
continue;
}
} else {
return null;
}
}
break;
}
});
birds_cljs.core.draw = (function draw(state){
cljs.core.apply.call(null,quil.core.background,birds_cljs.core.grass);

return birds_cljs.core.draw_flock.call(null,new cljs.core.Keyword(null,"flock","flock",265984040).cljs$core$IFn$_invoke$arity$1(state));
});
birds_cljs.core.birds_cljs = (function birds_cljs__$1(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674),birds_cljs.core.draw,new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"setup","setup",1987730512),birds_cljs.core.setup,new cljs.core.Keyword(null,"size","size",1098693007),birds_cljs.core.bounds,new cljs.core.Keyword(null,"update","update",1045576396),birds_cljs.core.update_state,new cljs.core.Keyword(null,"host","host",-1558485167),"birds-cljs");
});
goog.exportSymbol('birds_cljs.core.birds_cljs', birds_cljs.core.birds_cljs);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__5306__5307__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__5306__5307__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),birds_cljs.core.birds_cljs,new cljs.core.Keyword(null,"host-id","host-id",742376279),"birds-cljs"], null));
}
