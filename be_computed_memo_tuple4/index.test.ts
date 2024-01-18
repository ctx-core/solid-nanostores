import { be_atom_triple_, computed_, type ReadableAtom_ } from '@ctx-core/nanostores'
import { be_, ctx__new, type Ctx_wide_T, ns_ctx__new } from 'ctx-core/be'
import type { Equal, Expect } from 'ctx-core/test'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_computed_memo_tuple4_ } from '../index.js'
test('be_computed_memo_tuple4_|-autosubscribe', ()=>{
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>1)
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base$_(ctx)
		},
		base=>base + 1)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ns_ctx__new(ctx, ctx__new())).$, 3)
	equal(foobar_(ns_ctx__new(ctx, ctx__new())), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
})
test('be_computed_memo_tuple4_|+autosubscribe', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1)
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return base_(ctx) + 1
	})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ns_ctx__new(ctx, ctx__new())).$, 3)
	equal(foobar_(ns_ctx__new(ctx, ctx__new())), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
})
test('be_computed_memo_tuple4_|-autosubscribe|+id|+ns', ()=>{
	const [
		base$_,
		,
		base__set,
	] = be_atom_triple_(()=>1, {
		ns: 'test_ns',
	})
	const ctx = ns_ctx__new('test_ns')
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_<number, 'test_ns'>(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base$_(ctx)
		},
		base=>base + 1, {
			id: 'foobar',
			ns: 'test_ns',
		})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 3)
})
test('be_computed_memo_tuple4_|+autosubscribe|+id|+ns', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		ns: 'test_ns',
	})
	const ctx = ns_ctx__new('test_ns')
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_<number, 'test_ns'>(
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return base_(ctx) + 1
		},
		{
			id: 'foobar',
			ns: 'test_ns',
		})
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 2)
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 3)
})
test('be_computed_memo_tuple4_|be', ()=>{
	const [
		,
		base_,
		base__set,
	] = be_atom_triple_(()=>1, {
		ns: 'test_ns',
	})
	const ctx = ns_ctx__new('test_ns')
	const [
		foobar$_,
		foobar_,
		// foobar__memo,
		// foobar__memo_,
	] = be_computed_memo_tuple4_<number, 'test_ns', custom_T>(be_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		const foobar$ = computed_(()=>base_(ctx) + 1) as custom_T
		foobar$.custom = 'custom-val'
		return foobar$
	}, {
		id: 'foobar',
		ns: 'test_ns',
	}))
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 2)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(foobar$_(ctx).$, 2)
	equal(foobar_(ctx), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
	base__set(ctx, 2)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).$, 3)
	equal(foobar_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(foobar$_(ctx).$, 3)
	equal(foobar_(ctx), 3)
	// TODO: solid-js v3 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 3)
	// equal(foobar__memo([ctx_(), ctx]), 3)
	equal((ctx.s.test_ns.get('foobar')![0] as ReadableAtom_<number>).$, 3)
	equal(foobar$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = ReadableAtom_<number>&{ custom:string }

