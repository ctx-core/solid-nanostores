import type { be_config_arg_a_T, ReadableAtom_, StoreValues, WritableAtom_ } from '@ctx-core/nanostores'
import type { Be, be__val__new_T, ctx__be_T, ctx__get_T, wide_ctx_T } from 'ctx-core/be'
import type { AnyStore, ReadableAtom, Store, StoreValue, Task, WritableAtom } from 'nanostores'
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(be:Be<computed_T, ns_T, ctx_T>):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	computed__new:be__val__new_T<val_T, ns_T, ctx_T>,
	...config:be_config_arg_a_T<ns_T>
):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
	OriginStore extends Store<val_T> = Store<val_T>
>(
	stores__new:(ctx:ctx_T)=>OriginStore,
	val__new:(value:StoreValue<OriginStore>)=>Task<val_T>|val_T,
	...config:be_config_arg_a_T<ns_T>
):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function be_computed_memo_tuple4_<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
	OriginStores extends AnyStore<val_T>[] = AnyStore<val_T>[]
>(
	stores__new:(ctx:ctx_T)=>OriginStores,
	val__new:(...values:StoreValues<OriginStores>)=>Task<val_T>|val_T,
	...config:be_config_arg_a_T<ns_T>
):be_computed_memo_tuple4_T<val_T, ns_T, computed_T, ctx_T>
export declare function id_be_computed_memo_tuple4_<
	val_T,
	ns_T extends '' = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
>(
	id:string,
	computed__new:be__val__new_T<val_T, ns_T, ctx_T>,
):be_computed_memo_tuple4_T<val_T, ns_T, atom_T, ctx_T>
export declare function id_be_computed_memo_tuple4_<
	val_T,
	ns_T extends '' = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
	OriginStore extends Store<val_T> = Store<val_T>
>(
	id:string,
	stores__new:(ctx:ctx_T)=>OriginStore,
	val__new:(value:StoreValue<OriginStore>)=>Task<val_T>|val_T,
):be_computed_memo_tuple4_T<val_T, ns_T, atom_T, ctx_T>
export declare function id_be_computed_memo_tuple4_<
	val_T,
	ns_T extends '' = '',
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<''> = wide_ctx_T<''>,
	OriginStores extends AnyStore<val_T>[] = AnyStore<val_T>[]
>(
	id:string,
	stores__new:(ctx:ctx_T)=>OriginStores,
	val__new:(...values:StoreValues<OriginStores>)=>Task<val_T>|val_T,
):be_computed_memo_tuple4_T<val_T, ns_T, atom_T, ctx_T>
export declare function ns_be_computed_memo_tuple4_<
	val_T,
	ns_T extends string,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
>(
	ns:ns_T,
	val__new:be__val__new_T<val_T, ns_T, ctx_T>
):be_computed_memo_tuple4_T<val_T, ns_T, atom_T, ctx_T>
export declare function ns_be_computed_memo_tuple4_<
	val_T,
	ns_T extends string,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
	OriginStore extends Store<val_T> = Store<val_T>
>(
	ns:ns_T,
	stores__new:(ctx:ctx_T)=>OriginStore,
	val__new:(value:StoreValue<OriginStore>)=>Task<val_T>|val_T,
):be_computed_memo_tuple4_T<val_T, ns_T, atom_T, ctx_T>
export declare function ns_be_computed_memo_tuple4_<
	val_T,
	ns_T extends string,
	atom_T extends WritableAtom<val_T> = WritableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
	OriginStores extends AnyStore<val_T>[] = AnyStore<val_T>[]
>(
	ns:ns_T,
	stores__new:(ctx:ctx_T)=>OriginStores,
	val__new:(...values:StoreValues<OriginStores>)=>Task<val_T>|val_T,
):be_computed_memo_tuple4_T<val_T, ns_T, atom_T, ctx_T>
export type be_computed_memo_tuple4_T<
	val_T,
	ns_T extends string = '',
	computed_T extends ReadableAtom<val_T> = ReadableAtom_<val_T>,
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>,
> = [
	ctx__be_T<computed_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>,
	(ctx?:ctx_T)=>val_T,
	(ctx?:ctx_T)=>()=>val_T,
]
