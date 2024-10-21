const users = [
	{
		email: 'lukedacruz@email.com',
		password: 'password'
	},
	{
		email: 'jamessmith@email.com',
		password: 'password'
	},
	{
		email: 'paulmescal@email.com',
		password: 'password'
	}
]

export const getUserByEmail = (email: string) => {
	const found = users.find(user => user.email === email);
	return found;
}