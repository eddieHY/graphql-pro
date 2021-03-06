import mongoose from 'mongoose'
import { text } from 'express'
const List = mongoose.model('List')

export const getAllList = async (ctx, next) => {
  const Lists = await List.find({}).sort({date: -1})
  if (Lists.length) {
    ctx.body = {
      success: true,
      list: Lists
    }
  } else {
    ctx.body = {
      success: false
    }
  }
}

// 新增
export const addOne = async (ctx, next) => {
  const opts = ctx.request.body
  const list = new List(opts)
  const saveList = await list.save()
  console.log(saveList)
  if(saveList) {
    ctx.body = {
      success: true,
      id: opts.id
    }
  } else {
    ctx.body = {
      success: false,
      id: opts.id
    }
  }
}

export const editOne = async (ctx, next) => {
  const obj = ctx.request.body
  let hasError = false
  List.findOne({id: obj.id}, (err, doc) => {
    if (err) {
      hasError = true
      error = err
    } else {
      doc.title = obj.title
      doc.desc = obj.desc
      doc.date = obj.date
      doc.save()
    }
  })
  if (hasError) {
    ctx.body = {
      success: false,
      id: obj.id
    }
  } else {
    ctx.body = {
      success: true,
      id: obj.id
    }
  }
}

export const tickOne = async (ctx, next) => {
  const obj = ctx.request.body
  let hasError = false
  let error = null
  List.findOne({id: obj.id}, (err, doc) => {
    if (err) {
      hasError = true
      error = err
    } else {
      doc.checked = obj.checked 
      doc.save()
    }
  })
  if (hasError) {
    ctx.body = {
      success: false,
      id: obj.id
    }
  } else {
    ctx.body = {
      success: true,
      id: obj.id
    }
  }
}

export const delOne = async (ctx, next) => {
  const obj = ctx.request.body
  let hasError = false
  let msg = null
  List.remove({id: obj.id}, (err, doc) => {
    if (err) {
      hasError = true
      msg = err
    } else {
      msg = doc
    }
  })
  if (hasError) {
    ctx.body = {
      success: false,
      id: obj.id
    }
  } else {
    ctx.body = {
      success: true,
      id: obj.id
    }
  }
}