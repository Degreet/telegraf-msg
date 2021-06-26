module.exports = {
	send(ctx, msg, extra) {
		return ctx.replyWithHTML(msg, extra).catch(() => {})
	},

	sendTo(ctx, userId, msg, extra) {
		return ctx.telegram.sendMessage(userId, msg, extra).catch(() => {})
	},

	edit(ctx, msg, extra) {
		try {
			return ctx.editMessageText(msg, {
				parse_mode: 'html',
				...extra,
			})
		} catch {
			return ctx.replyWithHTML(msg, extra).catch(() => {})
		}
	},
}
