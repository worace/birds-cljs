// Compiled by ClojureScript 0.0-2740 {}
goog.provide('birds.flock');
goog.require('cljs.core');
goog.require('birds.bird');
goog.require('quil.core');
birds.flock.separation_radius = (20);
birds.flock.straying_radius = (50);
birds.flock.cohesion_radius = (50);
birds.flock.neighborhood_radius = (100);
birds.flock.PI = Math.PI;
birds.flock.TWO_PI = ((2) * Math.PI);
birds.flock.dist = (function dist(c1,c2){
return cljs.core.apply.call(null,quil.core.dist,cljs.core.concat.call(null,c1,c2));
});
birds.flock.create_flock = (function() {
var create_flock = null;
var create_flock__0 = (function (){
return create_flock.call(null,(10));
});
var create_flock__1 = (function (n){
return cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,birds.bird.create_bird));
});
create_flock = function(n){
switch(arguments.length){
case 0:
return create_flock__0.call(this);
case 1:
return create_flock__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_flock.cljs$core$IFn$_invoke$arity$0 = create_flock__0;
create_flock.cljs$core$IFn$_invoke$arity$1 = create_flock__1;
return create_flock;
})()
;
birds.flock.neighbors = (function() {
var neighbors = null;
var neighbors__2 = (function (bird,flock){
return neighbors.call(null,bird,flock,birds.flock.neighborhood_radius);
});
var neighbors__3 = (function (bird,flock,radius){
return cljs.core.filter.call(null,(function (flockmate){
return (!(cljs.core._EQ_.call(null,bird,flockmate))) && ((birds.flock.dist.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(flockmate)) < radius));
}),flock);
});
neighbors = function(bird,flock,radius){
switch(arguments.length){
case 2:
return neighbors__2.call(this,bird,flock);
case 3:
return neighbors__3.call(this,bird,flock,radius);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
neighbors.cljs$core$IFn$_invoke$arity$2 = neighbors__2;
neighbors.cljs$core$IFn$_invoke$arity$3 = neighbors__3;
return neighbors;
})()
;
birds.flock.crowded_QMARK_ = (function() {
var crowded_QMARK_ = null;
var crowded_QMARK___2 = (function (bird,crowders){
return crowded_QMARK_.call(null,bird,crowders,birds.flock.separation_radius);
});
var crowded_QMARK___3 = (function (bird,crowders,radius){
return !(cljs.core.empty_QMARK_.call(null,birds.flock.neighbors.call(null,bird,crowders,radius)));
});
crowded_QMARK_ = function(bird,crowders,radius){
switch(arguments.length){
case 2:
return crowded_QMARK___2.call(this,bird,crowders);
case 3:
return crowded_QMARK___3.call(this,bird,crowders,radius);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crowded_QMARK_.cljs$core$IFn$_invoke$arity$2 = crowded_QMARK___2;
crowded_QMARK_.cljs$core$IFn$_invoke$arity$3 = crowded_QMARK___3;
return crowded_QMARK_;
})()
;
birds.flock.avg_position = (function avg_position(group){
var coords = cljs.core.map.call(null,new cljs.core.Keyword(null,"position","position",-2011731912),group);
var xs = cljs.core.map.call(null,cljs.core.first,coords);
var ys = cljs.core.map.call(null,cljs.core.last,coords);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.reduce.call(null,cljs.core._PLUS_,xs) / cljs.core.count.call(null,group)),(cljs.core.reduce.call(null,cljs.core._PLUS_,ys) / cljs.core.count.call(null,group))], null);
});
birds.flock.avg_heading = (function avg_heading(group){
return (cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661),group)) / cljs.core.count.call(null,group));
});
birds.flock.straying_QMARK_ = (function() {
var straying_QMARK_ = null;
var straying_QMARK___2 = (function (bird,buddies){
return straying_QMARK_.call(null,bird,buddies,birds.flock.straying_radius);
});
var straying_QMARK___3 = (function (bird,buddies,radius){
return (birds.flock.dist.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird),birds.flock.avg_position.call(null,buddies)) > radius);
});
straying_QMARK_ = function(bird,buddies,radius){
switch(arguments.length){
case 2:
return straying_QMARK___2.call(this,bird,buddies);
case 3:
return straying_QMARK___3.call(this,bird,buddies,radius);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
straying_QMARK_.cljs$core$IFn$_invoke$arity$2 = straying_QMARK___2;
straying_QMARK_.cljs$core$IFn$_invoke$arity$3 = straying_QMARK___3;
return straying_QMARK_;
})()
;
birds.flock.angle_to_position = (function angle_to_position(coords){
return quil.core.atan2.call(null,cljs.core.last.call(null,coords),cljs.core.first.call(null,coords));
});
birds.flock.direction = (function direction(radians){
while(true){
if((radians < (0))){
var G__5863 = (birds.flock.TWO_PI + radians);
radians = G__5863;
continue;
} else {
return cljs.core.mod.call(null,radians,birds.flock.TWO_PI);
}
break;
}
});
birds.flock.steer_toward_position = (function steer_toward_position(bird,position){
if((birds.flock.angle_to_position.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird)) < birds.flock.angle_to_position.call(null,position))){
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),birds.flock.direction.call(null,(new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird) + 0.1)));
} else {
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),birds.flock.direction.call(null,(new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird) - 0.1)));
}
});
birds.flock.steer_from_position = (function steer_from_position(bird,position){
if((birds.flock.angle_to_position.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(bird)) < birds.flock.angle_to_position.call(null,position))){
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),birds.flock.direction.call(null,(new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird) - 0.1)));
} else {
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),birds.flock.direction.call(null,(new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird) + 0.1)));
}
});
birds.flock.steer_toward_avg_heading = (function steer_toward_avg_heading(bird,neighbors){
var avg = birds.flock.avg_heading.call(null,neighbors);
var current = new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(bird);
var diff = Math.abs.call(null,(current - avg));
var adj = (diff / (2));
if((current > avg)){
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),(current - adj));
} else {
return cljs.core.assoc.call(null,bird,new cljs.core.Keyword(null,"dir","dir",1734754661),(current + adj));
}
});
birds.flock.adjust_course = (function adjust_course(flock,bird){
var nearby = birds.flock.neighbors.call(null,bird,flock);
if(cljs.core.empty_QMARK_.call(null,nearby)){
return bird;
} else {
if(birds.flock.crowded_QMARK_.call(null,bird,nearby)){
return birds.flock.steer_from_position.call(null,bird,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,birds.flock.neighbors.call(null,bird,nearby,birds.flock.separation_radius))));
} else {
var nearby_avg = birds.flock.avg_position.call(null,nearby);
if(birds.flock.straying_QMARK_.call(null,bird,nearby)){
return birds.flock.steer_toward_position.call(null,bird,nearby_avg);
} else {
return birds.flock.steer_toward_avg_heading.call(null,bird,nearby);
}
}
}
});
birds.flock.adjust_courses = (function adjust_courses(flock){
return cljs.core.map.call(null,cljs.core.partial.call(null,birds.flock.adjust_course,flock),flock);
});
birds.flock.move_flock = (function move_flock(flock){
return cljs.core.map.call(null,(function (bird){
return birds.bird.move_bird.call(null,bird);
}),flock);
});
birds.flock.update_flock = (function update_flock(flock){
return birds.flock.move_flock.call(null,birds.flock.adjust_courses.call(null,flock));
});
