/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommunity = /* GraphQL */ `
  subscription OnCreateCommunity($owner: String) {
    onCreateCommunity(owner: $owner) {
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
export const onUpdateCommunity = /* GraphQL */ `
  subscription OnUpdateCommunity($owner: String) {
    onUpdateCommunity(owner: $owner) {
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
export const onDeleteCommunity = /* GraphQL */ `
  subscription OnDeleteCommunity($owner: String) {
    onDeleteCommunity(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateCommunityPost = /* GraphQL */ `
  subscription OnCreateCommunityPost($owner: String) {
    onCreateCommunityPost(owner: $owner) {
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
export const onUpdateCommunityPost = /* GraphQL */ `
  subscription OnUpdateCommunityPost($owner: String) {
    onUpdateCommunityPost(owner: $owner) {
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
export const onDeleteCommunityPost = /* GraphQL */ `
  subscription OnDeleteCommunityPost($owner: String) {
    onDeleteCommunityPost(owner: $owner) {
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
export const onCreatePostComment = /* GraphQL */ `
  subscription OnCreatePostComment($owner: String) {
    onCreatePostComment(owner: $owner) {
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
export const onUpdatePostComment = /* GraphQL */ `
  subscription OnUpdatePostComment($owner: String) {
    onUpdatePostComment(owner: $owner) {
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
export const onDeletePostComment = /* GraphQL */ `
  subscription OnDeletePostComment($owner: String) {
    onDeletePostComment(owner: $owner) {
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
