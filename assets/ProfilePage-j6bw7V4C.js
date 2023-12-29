import{g as Y,h as He,i as $e,m as ze,n as Ve,C as Ge,o as le,p as Xe,S as We,F as Ke,r as N,U as me,j as c,Q as F,q as ge,b as Ye,d as Ze,t as Je,v as Qe}from"./index-4bnI98Gt.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="firebasestorage.googleapis.com",ye="storageBucket",et=2*60*1e3,tt=10*60*1e3,nt=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b extends Ke{constructor(e,n,s=0){super(Q(e),`Firebase Storage: ${n} (${Q(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,b.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Q(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function Q(t){return"storage/"+t}function se(){const t="An unknown error occurred, please check the error payload for server response.";return new b(f.UNKNOWN,t)}function st(t){return new b(f.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function rt(t){return new b(f.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function it(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new b(f.UNAUTHENTICATED,t)}function ot(){return new b(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function at(t){return new b(f.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Re(){return new b(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Te(){return new b(f.CANCELED,"User canceled the upload/download.")}function lt(t){return new b(f.INVALID_URL,"Invalid URL '"+t+"'.")}function ut(t){return new b(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ct(){return new b(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ye+"' property when initializing the app?")}function we(){return new b(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ht(){return new b(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function dt(){return new b(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function pt(t){return new b(f.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ne(t){return new b(f.INVALID_ARGUMENT,t)}function xe(){return new b(f.APP_DELETED,"The Firebase app was deleted.")}function ft(t){return new b(f.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $(t,e){return new b(f.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function H(t){throw new b(f.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=C.makeFromUrl(e,n)}catch{return new C(e,"")}if(s.path==="")return s;throw ut(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(R){R.path.charAt(R.path.length-1)==="/"&&(R.path_=R.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function u(R){R.path_=decodeURIComponent(R.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",y=new RegExp(`^https?://${p}/${d}/b/${r}/o${_}`,"i"),m={bucket:1,path:3},U=n===be?"(?:storage.googleapis.com|storage.cloud.google.com)":n,g="([^?#]*)",h=new RegExp(`^https?://${U}/${r}/${g}`,"i"),T=[{regex:l,indices:a,postModify:i},{regex:y,indices:m,postModify:u},{regex:h,indices:{bucket:1,path:2},postModify:u}];for(let R=0;R<T.length;R++){const x=T[R],w=x.regex.exec(e);if(w){const I=w[x.indices.bucket];let q=w[x.indices.path];q||(q=""),s=new C(I,q),x.postModify(s);break}}if(s==null)throw lt(e);return s}}class _t{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function a(){return l===2}let u=!1;function d(...g){u||(u=!0,e.apply(null,g))}function p(g){r=setTimeout(()=>{r=null,t(y,a())},g)}function _(){i&&clearTimeout(i)}function y(g,...h){if(u){_();return}if(g){_(),d.call(null,g,...h);return}if(a()||o){_(),d.call(null,g,...h);return}s<64&&(s*=2);let T;l===1?(l=2,T=0):T=(s+Math.random())*1e3,p(T)}let m=!1;function U(g){m||(m=!0,_(),!u&&(r!==null?(g||(l=2),clearTimeout(r),p(0)):g||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,U(!0)},n),U}function gt(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t){return t!==void 0}function yt(t){return typeof t=="function"}function Rt(t){return typeof t=="object"&&!Array.isArray(t)}function Z(t){return typeof t=="string"||t instanceof String}function ue(t){return re()&&t instanceof Blob}function re(){return typeof Blob<"u"}function ce(t,e,n,s){if(s<e)throw ne(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw ne(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ke(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(D||(D={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,s,r,i,o,l,a,u,d,p,_=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,m)=>{this.resolve_=y,this.reject_=m,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new G(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const a=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===D.NO_ERROR,a=i.getStatus();if(!l||Ue(a,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===D.ABORT;s(!1,new G(!1,null,d));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new G(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(l,l.getResponse());bt(a)?i(a):i()}catch(a){o(a)}else if(l!==null){const a=se();a.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,a)):o(a)}else if(r.canceled){const a=this.appDelete_?xe():Te();o(a)}else{const a=Re();o(a)}};this.canceled_?n(!1,new G(!1,null,!0)):this.backoffId_=mt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class G{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function wt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ut(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Et(t,e,n,s,r,i,o=!0){const l=ke(t.urlParams),a=t.url+l,u=Object.assign({},t.headers);return kt(u,e),wt(u,n),xt(u,i),Ut(u,s),new Tt(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function St(...t){const e=Nt();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(re())return new Blob(t);throw new b(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){if(typeof atob>"u")throw pt("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ee{constructor(e,n){this.data=e,this.contentType=n||null}}function At(t,e){switch(t){case A.RAW:return new ee(Ee(e));case A.BASE64:case A.BASE64URL:return new ee(Ne(t,e));case A.DATA_URL:return new ee(Ot(e),It(e))}throw se()}function Ee(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Pt(t){let e;try{e=decodeURIComponent(t)}catch{throw $(A.DATA_URL,"Malformed data URL.")}return Ee(e)}function Ne(t,e){switch(t){case A.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw $(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw $(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ct(e)}catch(r){throw r.message.includes("polyfill")?r:$(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class Se{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw $(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Dt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ot(t){const e=new Se(t);return e.base64?Ne(A.BASE64,e.rest):Pt(e.rest)}function It(t){return new Se(t).contentType}function Dt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e,n){let s=0,r="";ue(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(ue(this.data_)){const s=this.data_,r=vt(s,e,n);return r===null?null:new O(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new O(s,!0)}}static getBlob(...e){if(re()){const n=e.map(s=>s instanceof O?s.data_:s);return new O(St.apply(null,n))}else{const n=e.map(o=>Z(o)?At(A.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)r[i++]=o[l]}),new O(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){let e;try{e=JSON.parse(t)}catch{return null}return Rt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function jt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function Ce(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e){return e}class E{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Bt}}let X=null;function Ft(t){return!Z(t)||t.length<2?t:Ce(t)}function Ae(){if(X)return X;const t=[];t.push(new E("bucket")),t.push(new E("generation")),t.push(new E("metageneration")),t.push(new E("name","fullPath",!0));function e(i,o){return Ft(o)}const n=new E("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new E("size");return r.xform=s,t.push(r),t.push(new E("timeCreated")),t.push(new E("updated")),t.push(new E("md5Hash",null,!0)),t.push(new E("cacheControl",null,!0)),t.push(new E("contentDisposition",null,!0)),t.push(new E("contentEncoding",null,!0)),t.push(new E("contentLanguage",null,!0)),t.push(new E("contentType",null,!0)),t.push(new E("metadata","customMetadata",!0)),X=t,X}function Mt(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new C(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function qt(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Mt(s,t),s}function Pe(t,e,n){const s=ve(e);return s===null?null:qt(t,s,n)}function Ht(t,e,n,s){const r=ve(e);if(r===null||!Z(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,_="/b/"+o(d)+"/o/"+o(p),y=z(_,n,s),m=ke({alt:"media",token:u});return y+m})[0]}function Oe(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class M{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){if(!t)throw se()}function ie(t,e){function n(s,r){const i=Pe(t,r,e);return P(i!==null),i}return n}function $t(t,e){function n(s,r){const i=Pe(t,r,e);return P(i!==null),Ht(i,r,t.host,t._protocol)}return n}function V(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ot():r=it():n.getStatus()===402?r=rt(t.bucket):n.getStatus()===403?r=at(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Ie(t){const e=V(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=st(t.path)),i.serverResponse=r.serverResponse,i}return n}function zt(t,e,n){const s=e.fullServerUrl(),r=z(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new M(r,i,ie(t,n),o);return l.errorHandler=Ie(e),l}function Vt(t,e,n){const s=e.fullServerUrl(),r=z(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new M(r,i,$t(t,n),o);return l.errorHandler=Ie(e),l}function Gt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function De(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Gt(null,e)),s}function Xt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let T="";for(let R=0;R<2;R++)T=T+Math.random().toString().slice(2);return T}const a=l();o["Content-Type"]="multipart/related; boundary="+a;const u=De(e,s,r),d=Oe(u,n),p="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,_=`\r
--`+a+"--",y=O.getBlob(p,s,_);if(y===null)throw we();const m={name:u.fullPath},U=z(i,t.host,t._protocol),g="POST",h=t.maxUploadRetryTime,v=new M(U,g,ie(t,n),h);return v.urlParams=m,v.headers=o,v.body=y.uploadData(),v.errorHandler=V(e),v}class K{constructor(e,n,s,r){this.current=e,this.total=n,this.finalized=!!s,this.metadata=r||null}}function oe(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{P(!1)}return P(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Wt(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o=De(e,s,r),l={name:o.fullPath},a=z(i,t.host,t._protocol),u="POST",d={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},p=Oe(o,n),_=t.maxUploadRetryTime;function y(U){oe(U);let g;try{g=U.getResponseHeader("X-Goog-Upload-URL")}catch{P(!1)}return P(Z(g)),g}const m=new M(a,u,y,_);return m.urlParams=l,m.headers=d,m.body=p,m.errorHandler=V(e),m}function Kt(t,e,n,s){const r={"X-Goog-Upload-Command":"query"};function i(u){const d=oe(u,["active","final"]);let p=null;try{p=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{P(!1)}p||P(!1);const _=Number(p);return P(!isNaN(_)),new K(_,s.size(),d==="final")}const o="POST",l=t.maxUploadRetryTime,a=new M(n,o,i,l);return a.headers=r,a.errorHandler=V(e),a}const he=256*1024;function Yt(t,e,n,s,r,i,o,l){const a=new K(0,0);if(o?(a.current=o.current,a.total=o.total):(a.current=0,a.total=s.size()),s.size()!==a.total)throw ht();const u=a.total-a.current;let d=u;r>0&&(d=Math.min(d,r));const p=a.current,_=p+d;let y="";d===0?y="finalize":u===d?y="upload, finalize":y="upload";const m={"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":`${a.current}`},U=s.slice(p,_);if(U===null)throw we();function g(R,x){const w=oe(R,["active","final"]),I=a.current+d,q=s.size();let J;return w==="final"?J=ie(e,i)(R,x):J=null,new K(I,q,w==="final",J)}const h="POST",v=e.maxUploadRetryTime,T=new M(n,h,g,v);return T.headers=m,T.body=U.uploadData(),T.progressCallback=l||null,T.errorHandler=V(t),T}const S={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function te(t){switch(t){case"running":case"pausing":case"canceling":return S.RUNNING;case"paused":return S.PAUSED;case"success":return S.SUCCESS;case"canceled":return S.CANCELED;case"error":return S.ERROR;default:return S.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,n,s){if(yt(e)||n!=null||s!=null)this.next=e,this.error=n??void 0,this.complete=s??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Jt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=D.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=D.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=D.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw H("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw H("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw H("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw H("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw H("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Qt extends Jt{initXhr(){this.xhr_.responseType="text"}}function B(){return new Qt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=s,this._mappings=Ae(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=r=>{if(this._request=void 0,this._chunkMultiplier=1,r._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Ue(r.status,[]))if(i)r=Re();else{this.sleepTime=Math.max(this.sleepTime*2,nt),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=r,this._transition("error")}},this._metadataErrorHandler=r=>{this._request=void 0,r._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=r,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((r,i)=>{this._resolve=r,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,s])=>{switch(this._state){case"running":e(n,s);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const s=Wt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,B,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,s)=>{const r=Kt(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,B,n,s);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=he*this._chunkMultiplier,n=new K(this._transferred,this._blob.size()),s=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=Yt(this._ref._location,this._ref.storage,s,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(a){this._error=a,this._transition("error");return}const l=this._ref.storage._makeRequest(o,B,r,i,!1);this._request=l,l.getPromise().then(a=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(a.current),a.finalized?(this._metadata=a.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){he*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const s=zt(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(s,B,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const s=Xt(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(s,B,e,n);this._request=r,r.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Te(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=te(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,s,r){const i=new Zt(n||void 0,s||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(te(this._state)){case S.SUCCESS:j(this._resolve.bind(null,this.snapshot))();break;case S.CANCELED:case S.ERROR:const n=this._reject;j(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(te(this._state)){case S.RUNNING:case S.PAUSED:e.next&&j(e.next.bind(e,this.snapshot))();break;case S.SUCCESS:e.complete&&j(e.complete.bind(e))();break;case S.CANCELED:case S.ERROR:e.error&&j(e.error.bind(e,this._error))();break;default:e.error&&j(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,n){this._service=e,n instanceof C?this._location=n:this._location=C.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new C(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ce(this._location.path)}get storage(){return this._service}get parent(){const e=Lt(this._location.path);if(e===null)return null;const n=new C(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ft(e)}}function tn(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new en(t,new O(e),n)}function nn(t){t._throwIfRoot("getDownloadURL");const e=Vt(t.storage,t._location,Ae());return t.storage.makeRequestWithTokens(e,B).then(n=>{if(n===null)throw dt();return n})}function sn(t,e){const n=jt(t._location.path,e),s=new C(t._location.bucket,n);return new L(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(t){return/^[A-Za-z]+:\/\//.test(t)}function on(t,e){return new L(t,e)}function Le(t,e){if(t instanceof ae){const n=t;if(n._bucket==null)throw ct();const s=new L(n,n._bucket);return e!=null?Le(s,e):s}else return e!==void 0?sn(t,e):t}function an(t,e){if(e&&rn(e)){if(t instanceof ae)return on(t,e);throw ne("To use ref(service, url), the first argument must be a Storage instance.")}else return Le(t,e)}function de(t,e){const n=e==null?void 0:e[ye];return n==null?null:C.makeFromBucketSpec(n,t)}function ln(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Xe(r,t.app.options.projectId))}class ae{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=be,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=et,this._maxUploadRetryTime=tt,this._requests=new Set,r!=null?this._bucket=C.makeFromBucketSpec(r,this._host):this._bucket=de(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=C.makeFromBucketSpec(this._url,e):this._bucket=de(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ce("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new _t(xe());{const o=Et(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const pe="@firebase/storage",fe="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="storage";function Be(t,e,n){return t=Y(t),tn(t,e,n)}function Fe(t){return t=Y(t),nn(t)}function Me(t,e){return t=Y(t),an(t,e)}function qe(t=ze(),e){t=Y(t);const s=He(t,je).getImmediate({identifier:e}),r=$e("storage");return r&&un(s,...r),s}function un(t,e,n,s={}){ln(t,e,n,s)}function cn(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new ae(n,s,r,e,We)}function hn(){Ve(new Ge(je,cn,"PUBLIC").setMultipleInstances(!0)),le(pe,fe,""),le(pe,fe,"esm2017")}hn();let W;const dn=new Uint8Array(16);function pn(){if(!W&&(W=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!W))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return W(dn)}const k=[];for(let t=0;t<256;++t)k.push((t+256).toString(16).slice(1));function fn(t,e=0){return k[t[e+0]]+k[t[e+1]]+k[t[e+2]]+k[t[e+3]]+"-"+k[t[e+4]]+k[t[e+5]]+"-"+k[t[e+6]]+k[t[e+7]]+"-"+k[t[e+8]]+k[t[e+9]]+"-"+k[t[e+10]]+k[t[e+11]]+k[t[e+12]]+k[t[e+13]]+k[t[e+14]]+k[t[e+15]]}const _n=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_e={randomUUID:_n};function mn(t,e,n){if(_e.randomUUID&&!e&&!t)return _e.randomUUID();t=t||{};const s=t.random||(t.rng||pn)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,e){n=n||0;for(let r=0;r<16;++r)e[n+r]=s[r];return e}return fn(s)}function gn(){const{currentUser:t,isUserPremium:e,UserCompanyName:n}=N.useContext(me),[s,r]=N.useState(""),[i,o]=N.useState(""),[l,a]=N.useState(""),[u,d]=N.useState(null),[p,_]=N.useState(""),[y,m]=N.useState(0),U=h=>{h.target.files[0]&&d(h.target.files[0])},g=async h=>{h.preventDefault();const v=mn(),T=qe(),R=Me(T,`${n}/images/${u.name}`),x=Be(R,u);x.on("state_changed",w=>{const I=w.bytesTransferred/w.totalBytes*100;m(I)},w=>{console.error(w),F.error("An error occurred during the upload.")},()=>{Fe(x.snapshot.ref).then(w=>{const I=ge();return Ye(Ze(I,"FreeDealStamps",`Free-${n}`),{[`${v}`]:{name:s,price:`$ ${i}`,category:l,imageUrl:w,likes:0,From:n,description:p}},{merge:!0})}).then(()=>{r(""),o(""),a(""),d(null),m(0),F.success("Your image has been uploaded successfully!")}).catch(w=>{console.error(w),F.error("An error occurred while saving the image data.")})})};return c.jsxs("div",{className:"bg-gray-800 text-white p-4 flex flex-col gap-4 items-center justify-center",children:[c.jsxs("h1",{className:"md:text-4xl",children:["Welcome,",t]}),c.jsx("p",{className:"text-lg",children:"This is the Free tier stamp upload where you can upload a max of 1 image."}),c.jsxs("form",{onSubmit:g,className:"flex flex-col gap-4",children:[c.jsx("input",{type:"file",onChange:U,className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsx("progress",{value:y,max:"100",className:"w-full"}),c.jsx("input",{type:"text",placeholder:"Name",value:s,onChange:h=>r(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsx("input",{type:"text",placeholder:"Description",value:p,onChange:h=>_(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsx("input",{type:"number",placeholder:"Price",value:i,onChange:h=>o(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsxs("select",{value:l,onChange:h=>a(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded",children:[c.jsx("option",{value:"",children:"Select a category"}),c.jsx("option",{value:"category1",children:"Category 1"}),c.jsx("option",{value:"category2",children:"Category 2"}),c.jsx("option",{value:"category3",children:"Category 3"})]}),c.jsx("button",{type:"submit",className:`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${!s||!i||!l?"opacity-50":""}`,disabled:!s||!i||!l,children:"Submit"})]})]})}function bn(){const{currentUser:t,isUserPremium:e,UserCompanyName:n}=N.useContext(me),[s,r]=N.useState(""),[i,o]=N.useState(""),[l,a]=N.useState(""),[u,d]=N.useState(""),[p,_]=N.useState(null),[y,m]=N.useState(0),U=h=>{h.target.files[0]&&_(h.target.files[0])},g=async h=>{h.preventDefault();const v=qe(),T=Me(v,`${n}/images/${p.name}`),R=Be(T,p);R.on("state_changed",x=>{const w=x.bytesTransferred/x.totalBytes*100;m(w)},x=>{console.error(x),F.error("An error occurred during the upload.")},()=>{Fe(R.snapshot.ref).then(x=>{const w=ge();return Je(Qe(w,"PremiumDealStamps"),{name:s,price:l,category:u,imageUrl:x,likes:0,From:n,description:i})}).then(()=>{r(""),a(""),d(""),_(null),m(0),F.success("Your image has been uploaded successfully!")}).catch(x=>{console.error(x),F.error("An error occurred while saving the image data.")})})};return c.jsxs("div",{className:"bg-gray-800 text-white p-4 flex flex-col gap-4 items-center justify-center ",children:[c.jsxs("h1",{className:"md:text-4xl",children:["Welcome,",t]}),c.jsx("p",{className:"text-lg",children:"This is the premium tier stamp upload where you can upload a max of 1 image."}),c.jsx("p",{className:"text-sm text-yellow-300",children:"Note: Premium tier allows for high priority deal stamps to be seen by every user."}),c.jsxs("form",{onSubmit:g,className:"flex flex-col gap-4",children:[c.jsx("input",{type:"file",onChange:U,className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsx("progress",{value:y,max:"100",className:"w-full"}),c.jsx("input",{type:"text",placeholder:"Name",value:s,onChange:h=>r(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsx("input",{type:"text",placeholder:"Description",value:i,onChange:h=>o(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsx("input",{type:"number",placeholder:"Price",value:l,onChange:h=>a(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded"}),c.jsxs("select",{value:u,onChange:h=>d(h.target.value),className:"py-2 px-4 bg-gray-700 text-white rounded",children:[c.jsx("option",{value:"",children:"Select a category"}),c.jsx("option",{value:"category1",children:"Category 1"}),c.jsx("option",{value:"category2",children:"Category 2"}),c.jsx("option",{value:"category3",children:"Category 3"})]}),c.jsx("button",{type:"submit",className:`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded ${!s||!l||!u?"opacity-50":""}`,disabled:!s||!l||!u,children:"Submit"})]})]})}function Rn(){const[t,e]=N.useState("");return c.jsxs("div",{className:"flex bg-gray-800 gap-4 flex-col items-center justify-center min-h-screen ",children:[c.jsx("button",{onClick:()=>e("free"),className:"py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded",children:"Free Tier"}),c.jsx("button",{onClick:()=>e("premium"),className:"py-2 px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded",children:"Premium Tier Upload"}),t==="free"&&c.jsx(gn,{}),t==="premium"&&c.jsx(bn,{})]})}export{Rn as default};
