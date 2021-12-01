/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommunity = /* GraphQL */ `
  query GetCommunity($id: ID!) {
    getCommunity(id: $id) {
      id
      createdAt
      title
      description
      owner
      Posts {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCommunities = /* GraphQL */ `
  query ListCommunities(
    $filter: ModelCommunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        title
        description
        owner
        Posts {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommunities = /* GraphQL */ `
  query SyncCommunities(
    $filter: ModelCommunityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommunities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        title
        description
        owner
        Posts {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      createdAt
      content
      posts {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        content
        posts {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        content
        posts {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      createdAt
      title
      content
      image
      Comments {
        items {
          id
          commentID
          postID
          comment {
            id
            createdAt
            content
            posts {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      communitys {
        items {
          id
          communityID
          postID
          community {
            id
            createdAt
            title
            description
            owner
            Posts {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          post {
            id
            createdAt
            title
            content
            image
            Comments {
              items {
                id
                commentID
                postID
                comment {
                  id
                  createdAt
                  content
                  posts {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            communitys {
              items {
                id
                communityID
                postID
                community {
                  id
                  createdAt
                  title
                  description
                  owner
                  Posts {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                }
                post {
                  id
                  createdAt
                  title
                  content
                  image
                  Comments {
                    items {
                      id
                      commentID
                      postID
                      comment {
                        id
                        createdAt
                        content
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  communitys {
                    items {
                      id
                      communityID
                      postID
                      community {
                        id
                        createdAt
                        title
                        description
                        owner
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                      }
                      post {
                        id
                        createdAt
                        title
                        content
                        image
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      createdAt
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    nextToken
                    startedAt
                  }
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              nextToken
              startedAt
            }
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCommunityPost = /* GraphQL */ `
  query GetCommunityPost($id: ID!) {
    getCommunityPost(id: $id) {
      id
      communityID
      postID
      community {
        id
        createdAt
        title
        description
        owner
        Posts {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCommunityPosts = /* GraphQL */ `
  query ListCommunityPosts(
    $filter: ModelCommunityPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommunityPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        communityID
        postID
        community {
          id
          createdAt
          title
          description
          owner
          Posts {
            items {
              id
              communityID
              postID
              community {
                id
                createdAt
                title
                description
                owner
                Posts {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        post {
          id
          createdAt
          title
          content
          image
          Comments {
            items {
              id
              commentID
              postID
              comment {
                id
                createdAt
                content
                posts {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          communitys {
            items {
              id
              communityID
              postID
              community {
                id
                createdAt
                title
                description
                owner
                Posts {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCommunityPosts = /* GraphQL */ `
  query SyncCommunityPosts(
    $filter: ModelCommunityPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCommunityPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        communityID
        postID
        community {
          id
          createdAt
          title
          description
          owner
          Posts {
            items {
              id
              communityID
              postID
              community {
                id
                createdAt
                title
                description
                owner
                Posts {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        post {
          id
          createdAt
          title
          content
          image
          Comments {
            items {
              id
              commentID
              postID
              comment {
                id
                createdAt
                content
                posts {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          communitys {
            items {
              id
              communityID
              postID
              community {
                id
                createdAt
                title
                description
                owner
                Posts {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPostComment = /* GraphQL */ `
  query GetPostComment($id: ID!) {
    getPostComment(id: $id) {
      id
      commentID
      postID
      comment {
        id
        createdAt
        content
        posts {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      post {
        id
        createdAt
        title
        content
        image
        Comments {
          items {
            id
            commentID
            postID
            comment {
              id
              createdAt
              content
              posts {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        communitys {
          items {
            id
            communityID
            postID
            community {
              id
              createdAt
              title
              description
              owner
              Posts {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            post {
              id
              createdAt
              title
              content
              image
              Comments {
                items {
                  id
                  commentID
                  postID
                  comment {
                    id
                    createdAt
                    content
                    posts {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              communitys {
                items {
                  id
                  communityID
                  postID
                  community {
                    id
                    createdAt
                    title
                    description
                    owner
                    Posts {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                  }
                  post {
                    id
                    createdAt
                    title
                    content
                    image
                    Comments {
                      items {
                        id
                        commentID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    communitys {
                      items {
                        id
                        communityID
                        postID
                        createdAt
                        updatedAt
                        _version
                        _deleted
                        _lastChangedAt
                        owner
                      }
                      nextToken
                      startedAt
                    }
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  createdAt
                  updatedAt
                  _version
                  _deleted
                  _lastChangedAt
                  owner
                }
                nextToken
                startedAt
              }
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPostComments = /* GraphQL */ `
  query ListPostComments(
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commentID
        postID
        comment {
          id
          createdAt
          content
          posts {
            items {
              id
              commentID
              postID
              comment {
                id
                createdAt
                content
                posts {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        post {
          id
          createdAt
          title
          content
          image
          Comments {
            items {
              id
              commentID
              postID
              comment {
                id
                createdAt
                content
                posts {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          communitys {
            items {
              id
              communityID
              postID
              community {
                id
                createdAt
                title
                description
                owner
                Posts {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPostComments = /* GraphQL */ `
  query SyncPostComments(
    $filter: ModelPostCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        commentID
        postID
        comment {
          id
          createdAt
          content
          posts {
            items {
              id
              commentID
              postID
              comment {
                id
                createdAt
                content
                posts {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        post {
          id
          createdAt
          title
          content
          image
          Comments {
            items {
              id
              commentID
              postID
              comment {
                id
                createdAt
                content
                posts {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          communitys {
            items {
              id
              communityID
              postID
              community {
                id
                createdAt
                title
                description
                owner
                Posts {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              post {
                id
                createdAt
                title
                content
                image
                Comments {
                  items {
                    id
                    commentID
                    postID
                    comment {
                      id
                      createdAt
                      content
                      posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                communitys {
                  items {
                    id
                    communityID
                    postID
                    community {
                      id
                      createdAt
                      title
                      description
                      owner
                      Posts {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                    }
                    post {
                      id
                      createdAt
                      title
                      content
                      image
                      Comments {
                        nextToken
                        startedAt
                      }
                      communitys {
                        nextToken
                        startedAt
                      }
                      updatedAt
                      _version
                      _deleted
                      _lastChangedAt
                      owner
                    }
                    createdAt
                    updatedAt
                    _version
                    _deleted
                    _lastChangedAt
                    owner
                  }
                  nextToken
                  startedAt
                }
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            nextToken
            startedAt
          }
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
