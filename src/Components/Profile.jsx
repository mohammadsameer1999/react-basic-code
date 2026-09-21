import React from 'react'

import { useLoaderData } from 'react-router-dom'

import profileImage from '../images/profile.jpg'


const Profile = () => {

  const user = useLoaderData();

  const formatDate = (value) =>
    new Date(value).toLocaleDateString('en-IN', {
      day: 'numeric', month: 'long', year: 'numeric',
    });

  return (
    <div className='profile-container'>

      <div className='profile-header'>

        <img
          className='profile-avatar'
          src={user.avatar_url || profileImage}
          alt={`${user.login} avatar`}
          onError={(e) => { e.currentTarget.src = profileImage }}
        />

        <div>

          <h1>{user.name || user.login}</h1>

          <p className='profile-login'>@{user.login}</p>

          {user.bio && <p className='profile-bio'>{user.bio}</p>}

          <a href={user.html_url} target='_blank' rel='noreferrer'>
            View on Github
          </a>

        </div>

      </div>

      <ul className='profile-stats'>

        <li><strong>{user.public_repos}</strong> Repositories</li>

        <li><strong>{user.public_gists}</strong> Gists</li>

        <li><strong>{user.followers}</strong> Followers</li>

        <li><strong>{user.following}</strong> Following</li>

      </ul>

      <table className='profile-details'>

        <tbody>

          <tr><td>Username</td><td>{user.login}</td></tr>

          <tr><td>Name</td><td>{user.name || '—'}</td></tr>

          <tr><td>Company</td><td>{user.company || '—'}</td></tr>

          <tr><td>Location</td><td>{user.location || '—'}</td></tr>

          <tr><td>Email</td><td>{user.email || 'Not public'}</td></tr>

          <tr>
            <td>Blog</td>
            <td>
              {user.blog
                ? <a href={user.blog} target='_blank' rel='noreferrer'>{user.blog}</a>
                : '—'}
            </td>
          </tr>

          <tr>
            <td>Twitter</td>
            <td>
              {user.twitter_username
                ? <a
                    href={`https://twitter.com/${user.twitter_username}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    @{user.twitter_username}
                  </a>
                : '—'}
            </td>
          </tr>

          <tr><td>Hireable</td><td>{user.hireable ? 'Yes' : 'Not specified'}</td></tr>

          <tr><td>Account Type</td><td>{user.type}</td></tr>

          <tr><td>User ID</td><td>{user.id}</td></tr>

          <tr><td>Joined</td><td>{formatDate(user.created_at)}</td></tr>

          <tr><td>Last Updated</td><td>{formatDate(user.updated_at)}</td></tr>

        </tbody>

      </table>

    </div>
  )
}

export default Profile
