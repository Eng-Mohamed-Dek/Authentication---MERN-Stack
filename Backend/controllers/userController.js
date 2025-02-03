import users from '../models/userModel.js'
import validator from 'validator'
import bcryptjs from 'bcryptjs'

// create user - CRUD - create
const signup =  async (req, res) => {
    const { name, email, password } = req.body;

    // check the input 
    if(!name) {
        return res.json({ message: "Name is required"  })
    }

    if(!password) {
        return res.json({ message: "Password is required"  })
    }

    if(!email) {
        return res.json({ message: "Email is required"  })
    }

    // validation 
    if(!validator.isEmail(email)) {
        return res.json({ message: "Invalid Email"  })
    }

    if(!validator.isStrongPassword(password)) {
        return res.json({ message: "Password Must Strong"  })
    }

    // user checking 
    const userExist = await users.findOne({ email })
    if(userExist){
        return res.json({ message: "User Already Exists"  })
    }

    // password encryption 
    const encryPassword = await bcryptjs.hash(password, 10)

    const user = await users.create({ name, email, password: encryPassword})

    res.json({
        message: "user created",
        user
    })
}

// create user - CRUD - create
const login =  async (req, res) => {
    const { email, password } = req.body;

    // check the input 
    if(!password) {
        return res.json({ message: "Password is required"  })
    }

    if(!email) {
        return res.json({ message: "Email is required"  })
    }

    // login code 

    // user checking 
    const userExist = await users.findOne({ email })

    if(!userExist){
        return res.json({ message: "This user is not exist"  })
    }

    // password encryption 
    const correctPassword = await bcryptjs.compare(password, userExist.password)

    if(!correctPassword){
        return res.json({ message: "Invalid Credentials"  })
    }

    res.json({
        message: "user Logged In",
    })
}

export { login, signup }