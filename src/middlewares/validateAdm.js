const validateAdm = (req, res, next) => {
    const { nome, email, idade, senha } = req.body;

    if (!nome || typeof nome !== 'string') {
        // 400 -> Bad request
        return res.status(400).json({ message: 'Campo invalido' });
    }

    if (!email || typeof nome !== 'string') {
        return res.status(400).json({ message: 'Campo invalido' });
    }

    if (!(email.includes("@") && email.includes("."))) {
        return res.status(400).json({ message: 'Campo invalido' });

    }

    if (!idade || typeof idade !== 'string') {
        // 400 -> Bad request
        return res.status(400).json({ message: 'Campo invalido' });
    }

    if (!senha || typeof senha !== 'string') {
        // 400 -> Bad request
        return res.status(400).json({ message: 'Campo invalido' });
    }

    // retonar o next
    next();


}

const validateAdmId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ message: 'Campo invalido' });
    }

    next();
}

module.exports = { validateAdm, validateAdmId }