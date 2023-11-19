import { type WritableAtom_ } from '@ctx-core/nanostores'
import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_atom_memo_tuple5_ } from '../index.js'
test('be_atom_memo_tuple5_', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<number, WritableAtom_<number>&{
		custom:string
	}>(()=>1)
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
})
test('be_atom_memo_tuple5_|+id|+is_source_|+oninit', ()=>{
	const ctx = ctx__new()
	const [
		foobar$_,
		foobar_,
		foobar__set,
		// foobar__memo,
		// foobar__memo_,
	] = be_atom_memo_tuple5_<
		number,
		// @formatter:off
		WritableAtom_<number>&{ custom:string }
		// @formatter:on
	>(()=>1)
		.config({
			id: 'foobar',
			is_source_: map_ctx=>map_ctx === ctx
		})
		.oninit((_ctx, foobar$)=>{
			if (Array.isArray(_ctx)) equal(_ctx[1], ctx)
			else equal(_ctx, ctx)
			foobar$.custom = 'custom-val'
		})
	equal(foobar$_([ctx__new(), ctx]).$, 1)
	equal(foobar_([ctx__new(), ctx]), 1)
	equal(foobar$_(ctx).$, 1)
	equal(foobar_(ctx), 1)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 1)
	// equal(foobar__memo([ctx_(), ctx]), 1)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 1)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
	foobar__set([ctx__new(), ctx], 2)
	equal(foobar$_([ctx__new(), ctx]).$, 2)
	equal(foobar_([ctx__new(), ctx]), 2)
	// TODO: solid-js v2 should have a way of calling memos without components
	// equal(foobar__memo_([ctx_(), ctx])(), 2)
	// equal(foobar__memo([ctx_(), ctx]), 2)
	equal((ctx.get('foobar') as WritableAtom_<number>).$, 2)
	equal(foobar$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(foobar$_(ctx).custom, 'custom-val')
})
test.run()
