exports.getAllUsers = (req, res) => {
    res.json([{ id: 1, name: 'John Doe' }]);
  };
  
  //user by id
  exports.getUserById = (req, res) => {
    const userId = req.params.id;
    res.json({ id: userId, name: 'John Doe' });
  };
  
  //new user
  exports.createUser = (req, res) => {
    const newUser = req.body;
    console.log('User created:', newUser);
    res.status(201).json(newUser);
  };
  
  //update user
  exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    console.log(`User ${userId} updated with`, updatedUser);
    res.json({ id: userId, ...updatedUser });
  };
  
  //adios user
  exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    console.log(`User ${userId} deleted`);
    res.status(204).send();
  };
  